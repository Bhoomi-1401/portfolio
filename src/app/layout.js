import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Bhoomi Thakur",
  description: "Bhoomi Thakur is an AI Engineer, Data Analyst and Machine Learning enthusiast.",
  openGraph: {
    title: "Bhoomi Thakur | AI Engineer",
    description: "AI Engineer | Data Analyst | Machine Learning | Python | SQL | Power BI",
    images: ["/og-image.png"],
    url: "https://portfolio-seven-drab-98.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhoomi Thakur | AI Engineer",
    description: "AI Engineer | Data Analyst | Machine Learning | Python | SQL | Power BI",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NRS9PX9R2K"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)}
gtag('js', new Date());
gtag('config', 'G-NRS9PX9R2K');`}
      </Script>
      <SmoothScroll />
      <body>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
          }}
        />
        {children}
      </body>
    </html>
  );
}