import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tyler Zolkos — CS Student · Cybersecurity · Front-End Dev",
  description:
    "Computer Science student at University of South Carolina focused on cybersecurity, software engineering, and building practical tools.",
  openGraph: {
    title: "Tyler Zolkos",
    description: "CS Student · Cybersecurity · Front-End Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
