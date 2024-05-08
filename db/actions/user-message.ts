"use server";

import { db } from "../db";
import { currentUser } from "@clerk/nextjs/server";
import { UserMessages } from "../schema";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export const createUserMessage = async (formData: FormData) => {
  const user = await currentUser();

  if (!user) throw new Error("User not found");

  const msg = formData.get("message") as string;

  await db.insert(UserMessages).values({
    user_id: user.id,
    message: msg,
  });

  redirect("/");
};

export async function deleteUserMessage() {
  const user = await currentUser();
  if (!user) throw new Error("User not found");
  await db.delete(UserMessages).where(eq(UserMessages.user_id, user.id));
  redirect("/");
}
