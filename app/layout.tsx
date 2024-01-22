import "./globals.css";
import { Poppins } from "next/font/google";

import LanguageProvider from "./LanguageProvider";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export const metadata = {
  title: "Neos | Conéctate a parques solares y ahorra un 36%",
  description:
    "Neos te permite comprar energía directamente de grandes parques solares. Reduce tus emisiones y costes sin ningún tipo de instalación, de manera instantánea y efectiva.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-white text-green`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer   />
        </LanguageProvider>
      </body>
    </html>
  );
}
