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
    
    const dbUser = await db.user.upsert({
      where:{
          email: user.emailAddresses[0]?.emailAddress
      },
      update:{
          email: user.emailAddresses[0]?.emailAddress || "",
          firstName: user.firstName ,
          lastName: user.lastName ,
      },
      create:{
          id: user.id,
          email: user.emailAddresses[0]?.emailAddress || "",
          firstName: user.firstName ,
          lastName: user.lastName ,
          imageUrl: user.imageUrl ,
      }
  })
    
    return dbUser;
  } catch (e) {
    console.log("Failed to sync user, the error is ->", e);
    throw e;
  }
} 