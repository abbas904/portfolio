import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/pageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-JetBrains_Mono",
  weight: ["variable"], // يشمل كل الأوزان
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
