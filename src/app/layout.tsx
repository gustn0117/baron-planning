import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "바론플래닝 - BARON PLANNING",
  description: "부동산 개발 종합 서비스 회사 바론플래닝. 분양사업부와 광고사업부를 통한 전문적인 부동산 개발 및 마케팅 서비스를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main style={{ paddingTop: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
