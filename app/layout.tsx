import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal Creative Management — Business Automation",
  description:
    "Custom automation systems for small businesses. AI-powered scheduling, follow-ups, document handling, and reporting. Based in Agoura Hills, CA.",
  openGraph: {
    title: "Portal Creative Management",
    description: "We automate your business.",
    url: "https://portal-vfx.com",
    siteName: "Portal Creative Management",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
