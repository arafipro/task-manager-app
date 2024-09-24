import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto_Sans_JP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager App",
  description: "Task Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto_Sans_JP.className}>{children}</body>
    </html>
  );
}
