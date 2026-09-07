import type { Metadata } from "next";
import { Sora, Tajawal } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { LanguageProvider } from "@/components/LanguageProvider";
import TopLeftImg from "@/components/TopLeftImg";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-family",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal-family",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Haitham Homaid | Portfolio",
  description:
    "Haitham Homaid is a full-stack developer and ERP system specialist based in Sana'a, Yemen, focused on responsive websites, custom web apps, and robust business solutions.",
  keywords: [
    "react",
    "next",
    "nextjs",
    "html",
    "css",
    "javascript",
    "js",
    "full-stack",
    "erp",
    "odoo",
    "data-analysis",
    "cybersecurity",
    "it-support",
    "portfolio",
    "framer-motion",
    "react-hot-toast",
  ],
  authors: [{ name: "Haitham Homaid" }],
  other: {
    "theme-color": "#03a9f4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${sora.variable} ${tajawal.variable} font-sora page bg-site text-white bg-cover bg-no-repeat relative`}
      >
        <LanguageProvider>
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
          <aside>
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "#393a47",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          </aside>
        </LanguageProvider>
      </body>
    </html>
  );
}
