'use client'

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
        <DashboardWrapper>{children}</DashboardWrapper>
        </QueryClientProvider>
      </body>
    </html>
  );
}
