import type { Metadata } from "next";

import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "Cllipy",
  description:
    "Cllipy is a clipboard manager that allows you to share your clipboard with others.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientProvider>
        <body style={{ backgroundColor: "#F0F0F0" }}>{children}</body>
      </ClientProvider>
    </html>
  );
}
