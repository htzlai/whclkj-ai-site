import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "重庆硕之达科技有限公司 - 智慧IT解决方案",
  description: "重庆硕之达科技有限公司专注于智慧IT解决方案，为政府、企业提供网络建设、系统集成、软件开发、IT运维等一站式信息化服务。",
  keywords: ["IT服务", "网络建设", "系统集成", "云计算", "IT运维", "软件开发", "重庆", "智慧IT"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--color-bg-dark)]`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
