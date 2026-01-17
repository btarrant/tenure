import { prisma } from "../lib/prisma.js";

export async function listCareerTracks(userId) {
  return prisma.careerTrack.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
  });
}

export async function createCareerTrack(userId, data) {
  return prisma.careerTrack.create({
    data: {
      userId,
      title: data.title,
      seniority: data.seniority ?? null,
      location: data.location ?? null,
      yearsExperience: data.yearsExperience ?? null,
      visibility: data.visibility ?? "QUIET",
    },
  });
}

export async function updateCareerTrack(userId, trackId, data) {
  const track = await prisma.careerTrack.findFirst({
    where: { id: trackId, userId },
  });

  if (!track) {
    throw new Error("Career track not found");
  }

  return prisma.careerTrack.update({
    where: { id: trackId },
    data,
  });
}

export async function updateTrackVisibility(userId, trackId, visibility) {
  return updateCareerTrack(userId, trackId, { visibility });
}
