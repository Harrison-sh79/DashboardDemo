/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-23 11:25:17
 * @Last Modified by: Harrison Song, harrison.sh@v-max.ca
 * @Last Modified time: 2024-02-23 13:24:23
 */
"use client";
import React from "react";
import { useSession } from "@clerk/nextjs";
import { checkUserRole } from "@/lib/clerk/userUtils";
import { KBarProvider } from "kbar";
import { actions } from "@/components/kbar/schema";


function BackendLayout({
  admin,
  influencer,
  merchant,
}: {
  admin: React.ReactNode;
  influencer: React.ReactNode;
  merchant: React.ReactNode;
}) {
  const { session } = useSession();
  if (!session) return null;
  const userRole = checkUserRole(session);


  return (
    /* Go to dashboard via different role by clerk */
    <>
      <KBarProvider actions={actions} options={{ enableHistory: true }}>
        {userRole === "org:admin"
          ? admin
          : userRole === "org:influencer"
          ? influencer
          : merchant}
      </KBarProvider>
    </>
  );
}

export default BackendLayout;
