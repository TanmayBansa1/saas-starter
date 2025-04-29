"use server"

import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/server/db";

export async function syncUser() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("Unauthorized");
    }
    
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    
    if (!user.emailAddresses[0]?.emailAddress) {
      throw new Error("User not found");
    }
    
    const userData = {
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      imageUrl: user.imageUrl || ""
    };

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: userData.email }
    });

    if (existingUser) {
      return existingUser;
    }
    
    const dbUser = await db.user.create({
      data: userData
    });
    
    return dbUser;
  } catch (e) {
    console.log("Failed to sync user, the error is ->", e);
    throw e;
  }
} 