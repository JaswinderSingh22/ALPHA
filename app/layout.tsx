import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "@/components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Alpha",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif">
        <Providers>
          <div
            className="flex flex-col h-screen"
          >
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
