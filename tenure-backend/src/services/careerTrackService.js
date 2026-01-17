import { prisma } from "../lib/prisma.js";
import { logActivity } from "./activityService.js";

export async function listCareerTracks(userId) {
  return prisma.careerTrack.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
  });
}

export async function createCareerTrack(userId, data) {
  const track = await prisma.careerTrack.create({
    data: {
      userId,
      title: data.title,
      seniority: data.seniority ?? null,
      location: data.location ?? null,
      yearsExperience: data.yearsExperience ?? null,
      visibility: data.visibility ?? "QUIET",
    },
  });

  await logActivity({
    userId,
    type: "TRACK_CREATED",
    metadata: {
      trackId: track.id,
      title: track.title,
    },
  });

  return track;
}

export async function updateCareerTrack(userId, trackId, data) {
  const track = await prisma.careerTrack.findFirst({
    where: { id: trackId, userId },
  });

  if (!track) {
    throw new Error("Career track not found");
  }

  const updated = await prisma.careerTrack.update({
    where: { id: trackId },
    data,
  });

  await logActivity({
    userId,
    type: "TRACK_UPDATED",
    metadata: {
      trackId,
      updatedFields: Object.keys(data),
    },
  });

  return updated;
}

export async function updateTrackVisibility(userId, trackId, visibility) {
  const updated = await updateCareerTrack(userId, trackId, { visibility });

  await logActivity({
    userId,
    type: "VISIBILITY_CHANGED",
    metadata: {
      trackId,
      visibility,
    },
  });

  return updated;
}

