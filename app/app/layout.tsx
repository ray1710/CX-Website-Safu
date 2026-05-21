import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safira | Customer Experience Consulting",
  description:
    "Consulting, training, and advisory support that transforms how your organization serves, supports, and retains customers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
