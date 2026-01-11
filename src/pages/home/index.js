// src/pages/Home/index.js
import React from "react";
import NavBar from "../../sections/NavBar/index";
import BannerPrimary from "../../sections/BannerPrimary/index";
import OurServices from "../../sections/OurServices/index"; // Renomeado para OurServices baseado no layout
import WhyChooseUs from "../../sections/WhyChooseUs/index"; // Novo componente para "Por que escolher nós?"
import VideoSection from "../../sections/VideoSection/index"; // Novo componente para seção de vídeo
import Testimonials from "../../sections/Testimonials/index"; // Novo componente para depoimentos
import Footer from "../../sections/Footer/index";
import ReactWhatsappButton from "react-whatsapp-button";
import "../../global.css";

function Home() {
  return (
    <div className="container">
      <ReactWhatsappButton countryCode="55" phoneNumber="55999293516" />
      <NavBar />
      <BannerPrimary />
      <OurServices />
      <WhyChooseUs />
      {/* <VideoSection /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;