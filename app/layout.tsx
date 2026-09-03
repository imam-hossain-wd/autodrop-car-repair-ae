import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/Footer/Footer";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import FloatingButtons from "@/components/shared/FloatingButtons/FloatingButtons";

const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoDrop Car Repair Mobile Mechanic Dubai",
  description: "AutoDrop Car Repair Mobile Mechanic Dubai is professional car repair service in Dubai. We provide mobile mechanic services for all types of vehicles, including cars, trucks, and motorcycles. Our team of experienced mechanics is available 24/7 to provide emergency roadside assistance and car repair services at your location.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, inter.variable, "font-serif", notoSerif.variable)}
    >
      <main>
        <Navbar />
        <FloatingButtons />
        <body className="min-h-full flex flex-col">

          {children}
          <Footer />
        </body>
      </main>
    </html>
  );
}
