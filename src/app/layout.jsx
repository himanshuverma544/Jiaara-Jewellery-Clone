import { Inter } from "next/font/google";

import 'pure-react-carousel/dist/react-carousel.es.css';
import "./globals.css";

import App from "@/components/pages/layout/App";
import Header from "@/components/pages/layout/Header";
import Main from "@/components/pages/layout/Main";
import Footer from "@/components/pages/layout/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jiaara Jewellery",
  description: "Ecommerce site for buying Jewellery Items",
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={process.env.NODE_ENV === "development"}
      >
        <App>
          <Header/>
          <Main childComponents={children}/>
          <Footer/>
        </App>
      </body>
    </html>
  );
}
