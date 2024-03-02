import React from "react";
import NavBar from "./sections/NavBar/index";
import BannerPrimary from "./sections/BannerPrimary/index";
import OurProducts from "./sections/OurProducts/index";
import OurSolutions from "./sections/OurSolutions/index";
import OurTeam from "./sections/OurTeam/index";
import Footer from "./sections/Footer/index";
import Form from "./sections/Form/index";

import ReactWhatsappButton from "react-whatsapp-button";

import "./global.css";

function App() {
  return (
    <div className="container">
      <ReactWhatsappButton
        countryCode="41"
        phoneNumber="96745640" 
      />
      <NavBar />
      <BannerPrimary />
      <OurProducts />
      <OurSolutions />
      <Form />
      {/* <OurTeam /> */}
   
      <Footer />
    </div>
  );
}

export default App;
