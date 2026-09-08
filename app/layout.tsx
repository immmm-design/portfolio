import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/config";

const siteUrl = "https://portfolio1-zeta-olive.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    siteName: "Ivan Makarenko",
    type: "profile",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivan Makarenko",
  jobTitle: "Technical Product Manager",
  description: siteConfig.description,
  url: siteUrl,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Columbia University, School of Professional Studies",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Arizona State University, Ira A. Fulton Schools of Engineering",
    },
  ],
  knowsAbout: [
    "Technical Product Management",
    "Robotics",
    "Hardware Product Development",
    "Manufacturing",
    "Design for Manufacturing",
  ],
  sameAs: [siteConfig.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ivan-theme");if(t!=="light"){document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
