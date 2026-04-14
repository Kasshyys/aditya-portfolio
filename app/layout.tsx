import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { inter, playfair, jetbrains } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Aditya Prakash — Full-Stack Developer & Designer",
  description:
    "Portfolio of Aditya Prakash, a full-stack developer and designer specializing in modern web applications with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Aditya Prakash",
    "full-stack developer",
    "web developer",
    "designer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "India",
    "freelance developer",
  ],
  authors: [{ name: "Aditya Prakash" }],
  creator: "Aditya Prakash",
  openGraph: {
    title: "Aditya Prakash — Full-Stack Developer & Designer",
    description:
      "Portfolio of Aditya Prakash, a full-stack developer and designer specializing in modern web applications.",
    url: "https://adityaprakash.dev",
    siteName: "Aditya Prakash Portfolio",
    images: [
      {
        url: "https://adityaprakash.dev/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Prakash Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Prakash — Full-Stack Developer & Designer",
    description:
      "Portfolio of Aditya Prakash, a full-stack developer and designer.",
    images: ["https://adityaprakash.dev/images/og/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#c8ff00",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aditya Prakash",
    "url": "https://adityaprakash.dev",
    "jobTitle": "Full-Stack Developer & Designer",
    "sameAs": [
      "https://www.linkedin.com/in/adityaprakash06/",
      "https://github.com/Kasshyys",
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const theme = localStorage.getItem('ap-theme') || 
                  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main id="main-content">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
