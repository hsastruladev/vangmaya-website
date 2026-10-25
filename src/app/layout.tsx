import type { Metadata } from "next";
import { Inter, Noto_Serif_Telugu } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  variable: "--font-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "వాంగ్మయం — ప్రాచీన సాహిత్యం, ఆధునిక రూపంలో",
    template: "%s | వాంగ్మయం",
  },
  description:
    "ప్రజా డొమైన్ తెలుగు కావ్యాలను ప్రకటనలు లేని, ప్రశాంతమైన పఠన అనుభవంలో చదవండి.",
  applicationName: "Vangmaya",
  metadataBase: new URL("https://vangmaya.com"),
  openGraph: {
    title: "వాంగ్మయం — ప్రాచీన సాహిత్యం, ఆధునిక రూపంలో",
    description: "తెలుగు సాహిత్యాన్ని ప్రకటనలు లేకుండా చదవండి.",
    siteName: "Vangmaya",
    locale: "te_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSerifTelugu.variable}`}>
        <SiteHeader />
        {children}
        <footer className="site-footer" id="about">
          <div className="section-shell footer-inner">
            <a aria-label="Vangmaya home" className="footer-brand" href="/">
              <span aria-hidden="true" className="brand-mark">
                వ
              </span>
              <span>వాంగ్మయం</span>
            </a>
            <p>
              All texts are from public domain sources. Inspired by
              Andhrabharati volunteer effort.
            </p>
            <span className="footer-tagline">
              Prachina Sahityam, Adhunika Rupamlo. No Ads.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
