/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-26 21:24:40
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-02-29 11:51:55
 */
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ReduxProviders } from "@/lib/redux/providers";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

/* Font setting */
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

/* Web file metadata setting */
export const metadata: Metadata = {
  title: "V-MAX Shop",
  description: "V-MAX Dashboard on everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* Authentication by clerk */
    <ClerkProvider>
      {/* Redux statement management */}
      <ReduxProviders>
        <html lang="en" suppressHydrationWarning>
          <body
            className={cn(
              "min-h-screen w-full bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            {/* nProgress Bar on Browser */}
            <NextTopLoader
              color="#ff0095"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #990059,0 0 5px #6333ff"
              zIndex={1600}
              showAtBottom={false}
            />
            <TooltipProvider delayDuration={0}>
              {/* Darm mode  */}
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
                <Toaster />
              </ThemeProvider>
            </TooltipProvider>
          </body>
        </html>
      </ReduxProviders>
    </ClerkProvider>
  );
}
