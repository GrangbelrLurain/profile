import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import "@public/font/font.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEAM ROOFTOP CAT",
  description: "개발팀 옥탑방 고양이입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="shortcut icon" href="/logo.svg" />
      </head>
      <body
        className={clsx(
          notoSans.className,
          "drawer drawer-end flex flex-col min-h-screen"
        )}
      >
        <input id="main-drawer" type="checkbox" className="drawer-toggle" />
        <Header className="z-50" />
        <nav className="drawer-side overflow-hidden z-40">
          <label
            htmlFor="main-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <div className="pt-16 bg-base-100 h-full px-8">
            <ul
              className={clsx(
                "gap-2 transition-all flex flex-col items-center"
              )}
            >
              <li>
                <Link href="/portfolio">포트폴리오</Link>
              </li>
              <li>팀 소개</li>
              <li>문의하기</li>
            </ul>
          </div>
        </nav>
        <main className="drawer-content flex flex-col flex-grow">
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
