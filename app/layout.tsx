import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/src/components/main/Navigation"; // 방금 만든 컴포넌트 불러오기

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Jobs 2025",
  description: "개발자 채용 트렌드 분석 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}