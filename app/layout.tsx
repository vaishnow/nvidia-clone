import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


export const metadata: Metadata = {
  title: "NVIDIA Clone | Next.js + Typescript + TailwindCSS",
  description: "NVIDIA Clone created using Next.js + Typescript + TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
