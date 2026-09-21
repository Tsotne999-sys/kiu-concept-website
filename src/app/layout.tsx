import type { Metadata } from "next";
import "./globals.css";
import "./experience.css";

export const metadata: Metadata = {
  title: "KIU — Study. Build. Shape the Future.",
  description:
    "An independent portfolio concept for Kutaisi International University. Explore a vision of education, technology and campus life in Kutaisi, Georgia.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
