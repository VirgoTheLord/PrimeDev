import { Protest_Guerrilla, JetBrains_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetbrainsMono = Protest_Guerrilla({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-protestguerilla",
});

const dancing = Permanent_Marker({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-dancingscript"
})

const jetbrainsMono1 = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

export const metadata = {
  manifest: "/manifest.json",
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono1.variable} ${dancing.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
