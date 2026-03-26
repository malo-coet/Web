import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelDisplay = localFont({
  src: "../../Ressources/Press_Start_2P/PressStart2P-Regular.ttf",
  variable: "--font-pixel",
  display: "swap",
  weight: "400",
  style: "normal",
});

const retroMono = localFont({
  src: "../../Ressources/Fira_Code,Press_Start_2P/Fira_Code/FiraCode-VariableFont_wght.ttf",
  variable: "--font-retro-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malo COËT | FOLIO",
  description:
    "Portfolio moderne Next.js avec animations Framer Motion, glassmorphism et dark mode.",
  metadataBase: new URL("https://portfolio.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${pixelDisplay.variable} ${retroMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
