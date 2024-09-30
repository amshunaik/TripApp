import { Inter } from "next/font/google";
import "./globals.css";
//import MainNavigation from "@/components/layout/MainNavigation";
import MainNavigation from "../components/layout/MainNavigation";
import Footer from "../components/layout/Footer";
//import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      
        <MainNavigation/>
        
        {children}
        
        <Footer/>
       
        </body>
    </html>
  );
}
