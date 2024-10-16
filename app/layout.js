import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = { 
  title: {
    default: "Invoicer | Generate and Download Invoices",
    template: "%s | Invoicer | Generate and Download Invoices",
  },
  description: "Easily generate invoices for yourself and your clients.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "./opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
