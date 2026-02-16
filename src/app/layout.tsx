import type { Metadata } from 'next';
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // we'll create this
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navigation";


export const metadata: Metadata = { 
  title: "Digital Atlantic Republic",
  description: "Peaceful, constitutional movement for resource control and prosperity in the Niger Delta.",
};
 
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

// export const metadata: Metadata = {
//   title: "Digital Atlantic Republic - Niger Delta Self-Determination",
//   description: "Peaceful, constitutional movement for resource control and prosperity in the Niger Delta.",
//   openGraph: {
//     images: "/images/og-image.jpg",  
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(poppins.variable, openSans.variable)}>
      <body className="font-open-sans antialiased scroll-smooth">
        <Navbar /> 
        {/* {children} */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}