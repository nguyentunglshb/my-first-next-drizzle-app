import { eq } from "drizzle-orm";
import { db } from "../db";
import { User } from "../schema";

type UserInput = typeof User.$inferInsert;

export const createUser = async (user: UserInput) => {
  await db.insert(User).values({
    ...user,
  });
};

export const deleteUser = async (userId: UserInput["id"]) => {
  await db.delete(User).where(eq(User.id, userId)).returning();
};
