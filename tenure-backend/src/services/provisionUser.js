import { prisma } from "../lib/prisma.js";

/**
 * Ensures a Prisma User + Profile exists for a given Supabase auth user.
 * Safe to call multiple times.
 */
export async function provisionUser({ authUserId, email }) {
  if (!authUserId) throw new Error("authUserId is required");
  if (!email) throw new Error("email is required");

  const user = await prisma.user.upsert({
    where: { authUserId },
    update: { email },
    create: {
      authUserId,
      email,
      profile: {
        create: {}, // default profile row
      },
    },
    include: { profile: true },
  });

  return user;
}
