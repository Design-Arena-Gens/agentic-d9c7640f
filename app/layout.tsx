import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Greeting Hub",
  description: "A playful landing page responding to your friendly hi."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              AgenticHub
            </Link>
            <NavBar />
          </div>
        </header>
        <main className="main">{children}</main>
        <footer className="site-footer">
          <div className="container footer-content">
            <p>&copy; {new Date().getFullYear()} Agentic Greeting Hub</p>
            <p className="credit">
              Crafted autonomously with Next.js and a friendly spirit.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
