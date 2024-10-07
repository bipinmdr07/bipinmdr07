import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google"
/* import localFont from "next/font/local"; */
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/containers/Menu";

/* const geistSans = localFont({
*   src: "./fonts/GeistVF.woff",
*   variable: "--font-geist-sans",
*   weight: "100 900",
* });
* const geistMono = localFont({
*   src: "./fonts/GeistMonoVF.woff",
*   variable: "--font-geist-mono",
*   weight: "100 900",
* }); */

const anek = Anek_Latin({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bipin Manandhar = Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background", anek.className)}
      >
        <Menu />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
