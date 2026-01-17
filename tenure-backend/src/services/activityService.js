import { prisma } from "../lib/prisma.js";

export async function logActivity({ userId, type, metadata = null }) {
  return prisma.activity.create({
    data: {
      userId,
      type,
      metadata,
    },
  });
}
