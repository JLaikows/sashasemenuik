import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Sasha Semeniuk",
    default: "Sasha Semeniuk",
  },
  description: "Model | Actress | Singer",
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
        <meta property="og:image" content="https://iili.io/mZUDqF.jpg" />
        <meta property="og:title" content="Sasha Semeniuk" />
        <meta property="og:description" content="Model | Actress | Singer" />
        <meta property="og:url" content="https://www.sashasemeniuk.com" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@sashasaythat" />
        <meta property="twitter:title" content="Sasha Semeniuk" />
        <meta
          property="twitter:description"
          content="Model | Actress | Singer"
        />
        <meta property="twitter:image" content="https://iili.io/mZUDqF.jpg" />
      </head>
      <body className="relative">
        <Box className="w-full p-6">
          <h1 className="letter-spread text-3xl lg:text-5xl text-center">
            Sasha Semeniuk
          </h1>
          <h2 className="text-2xl lg:text-4xl text-center">Model</h2>
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
        <div className="relative bottom-0 flex justify-center w-full flex-col">
          <div className="text-center text-sm color-lightgrey">
            Copyright Sasha Semeniuk. All Rights Reserved
          </div>
          <div className="text-center text-sm color-lightgrey">
            Web Design by CodeLaik
          </div>
        </div>
      </body>
    </html>
  );
}
