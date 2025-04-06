import TopLoader from "@/components/TopLoader";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/lib/redux/StoreProvider";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Umusamariya ",
  description: "Umutekano binyuze mu bumenyi.",
  keywords: ["Umusamariya", "ibizamini", "ibizamini by'ikoranabuhanga"],
  icons: [{ rel: "icon", url: "/favi (1).png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopLoader />
        <StoreProvider>
          <Toaster position="top-right" />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
