
import "./globals.css";
import Navbar from "./navbar/Navbar";

import { Inter } from "next/font/google";
import Footer from "./footer/footer";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "mufliha azmi",
  icons: {
    icon: "/muf.jpg",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar/>{children}<Footer/>
      </body>
    </html>
  );
}
