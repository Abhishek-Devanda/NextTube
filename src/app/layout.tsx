import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"
import { HomeSidebar } from "@/components/home/home_sidebar/HomeSidebar";
import { HomeNavbar } from "@/components/home/home_navbar/HomeNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextTube",
  description: "Created by Abhishek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl='/'>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="w-full">
                <HomeNavbar />
                <div className="flex min-h-screen pt-[4rem]">
                    <HomeSidebar/>
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
        </ThemeProvider>
      </body>
      </html>
      </ClerkProvider>
  );
}
