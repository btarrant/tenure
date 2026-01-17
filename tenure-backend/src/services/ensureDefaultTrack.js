import { prisma } from "../lib/prisma.js";

export async function ensureDefaultTrack(userId) {
  const existing = await prisma.careerTrack.findFirst({
    where: { userId },
  });

  if (existing) return existing;

  return prisma.careerTrack.create({
    data: {
      userId,
      title: "Primary Career Track",
      visibility: "QUIET",
    },
  });
}
