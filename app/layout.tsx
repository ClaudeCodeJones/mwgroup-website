import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Work_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MW Group",
  description:
    "MW Group is a family owned New Zealand group of businesses built around one simple idea, doing things properly.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NZ"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${workSans.variable}`}
    >
      <body className="bg-bone font-sans antialiased">{children}</body>
    </html>
  );
}
