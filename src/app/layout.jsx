import { Montserrat } from "next/font/google";

import 'pure-react-carousel/dist/react-carousel.es.css';
import "@/app/globals.css";

import App from "@/components/pages/layout/App";
import Header from "@/components/pages/layout/header/Header";
import ManageLayoutSidebar from "@/components/pages/layout/manage-layout-sidebar/ManageLayoutSidebar";
import Main from "@/components/pages/layout/Main";
import Footer from "@/components/pages/layout/Footer";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Jiaara Jewellery",
  description: "Ecommerce site for buying Jewellery Items",
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16"/>
      </head>
      <body
        className={`${montserrat.className}`}
        suppressHydrationWarning={process.env.NODE_ENV === "development"}
      >
        <App>
          <Header/>
          <ManageLayoutSidebar/>
          <Main childComponents={children}/>
          <Footer/>
        </App>
      </body>
    </html>
  );
}
