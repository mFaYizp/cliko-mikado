import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "../public/gilroy/Gilroy-Thin.ttf",
      weight: "200",
      style: "thin",
    },
    {
      path: "../public/gilroy/Gilroy-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/gilroy/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/gilroy/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "bold",
    },
    {
      path: "../public/gilroy/Gilroy-Black.ttf",
      weight: "900",
      style: "extrabold",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Cliko",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
