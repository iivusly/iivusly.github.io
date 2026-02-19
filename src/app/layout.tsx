import type { Metadata } from "next";

import { Iosevka } from "@lib/fonts";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeClientWrapper from "@/lib/theme";
import Footer from "@components/footer";
import Header from "@components/header";

export const metadata: Metadata = {
  title: "iivusly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={Iosevka.className}>
        <StyledComponentsRegistry>
          <ThemeClientWrapper>
            <Header />
            {children}
            <Footer />
          </ThemeClientWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
