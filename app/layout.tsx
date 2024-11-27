import type { Metadata } from "next";

import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "Cllipy",
  description:
    "Cllipy is a clipboard manager that allows you to share your clipboard with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientProvider>
        <body>{children}</body>
      </ClientProvider>
    </html>
  );
}
