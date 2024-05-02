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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>
      <body>
        <Box className="w-full p-6">
          <Box className="letter-spread text-3xl lg:text-5xl text-center">
            Sasha Semeniuk
          </Box>
          <Box className="text-2xl lg:text-4xl text-center">Model</Box>
          <Box className="flex flex-row justify-center h-10 ">
            <Link href="/" className="pr-4 pt-4 hoverunderline">
              Home
            </Link>
            <Link href="/about" className="pr-4 pt-4 hoverunderline">
              About
            </Link>
            <Link href="/contact" className="pr-4 pt-4 hoverunderline">
              Contact
            </Link>
          </Box>
        </Box>
        {children}
      </body>
    </html>
  );
}
