import { Inter } from "next/font/google";

import 'pure-react-carousel/dist/react-carousel.es.css';
import "./globals.css";

import Header from "@/components/pages/layout/Header";
import Footer from "@/components/pages/layout/Footer";

import ContextProvider from "@/context-API/ContextProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jiaara Jewellery",
  description: "Ecommerce site for buying Jewellery Items",
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Header/>
            <main className="bg-primaryBackground">
              {children}
            </main>
          <Footer/>
        </ContextProvider>
      </body>
    </html>
  );
}
