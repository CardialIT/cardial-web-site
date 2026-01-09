// src/sections/VideoSection/index.js
// Seção com vídeo do YouTube
import React from "react";
import "./styles.css";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-content">
        <div className="video-text">
          <h2>Somos a ponte entre sua ideia e o digital</h2>
          <p>Transformamos empresas tradicionais em produtos digitais de alta performance. Nossa equipe apaixonada por tecnologia garante resultados rápidos e eficientes.</p>
          <p>Assista ao vídeo abaixo para entender como podemos ajudar.</p>
        </div>
        <div className="video-embed">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID_AQUI" // Substitua pelo ID real do vídeo
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}