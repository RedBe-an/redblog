import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        
          <Navbar />
          <Main />
          <Footer />
          <NextScript />
      </body>
    </Html>
  );
}
