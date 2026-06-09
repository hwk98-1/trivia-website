import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breaking Bad Trivia",
  description: "Think you know the Blue Sky empire? Test your Breaking Bad knowledge.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
