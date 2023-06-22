import React from "react";

import Header from "../container/Header";
import Footer from "../container/Footer";
import "../assets/styles/layouts/general-layout.scss";



function GeneralLayout({ children }) {
  return (
    <div className="dance-general-layout">
   <Header/>
    <main className="dance-general-layout_page-content">
        { children }
    </main>
   <Footer/>
    </div>
  )
};

export default GeneralLayout;