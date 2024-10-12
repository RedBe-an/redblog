import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
          <Analytics />
          <Navbar />
          <Main />
          <Footer />
          <NextScript />
      </body>
    </Html>
  );
}
