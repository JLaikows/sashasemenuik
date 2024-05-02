import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "description",
  description: "Sasha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Box className="w-full p-6">
          <Box className="letter-spread text-3xl lg:text-5xl text-center">
            Sasha Semenuik
          </Box>
          <Box className="text-2xl lg:text-4xl text-center">Model</Box>
          <Box className="flex flex-row justify-center ">
            <Link href="/" className="pr-4 pt-4">
              Home
            </Link>
            <Link href="/about" className="pr-4 pt-4">
              About
            </Link>
            <Link href="/contact" className="pr-4 pt-4">
              Contact
            </Link>
          </Box>
        </Box>
        {children}
      </body>
    </html>
  );
}
