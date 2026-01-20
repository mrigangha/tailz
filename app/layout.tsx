import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createDBLead, createDBUser } from "../lib/db";
import Navbar from "../components/components/Navbar";
import { addLead, ServiceType } from "@/lib/leads";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //await createDBUser();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
