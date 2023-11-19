import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nalo NFT",
  icons: {
    icon: "favicon.ico",
  },
  description:
    "Nalo, an innovative financial technology company, recently launched a revolutionary NFT platform. Nalo's new platform offers a unique user experience, combining security, ease of use and exclusive access to a diverse range of digital art and rare digital assets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
