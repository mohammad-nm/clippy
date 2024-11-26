import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cllipy",
  description: "Cllipy is a clipboard manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
