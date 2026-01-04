import React from "react";
import HeroImage from "../../../img/img-main.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-description">
            <h3>Olá, eu sou</h3>
            <h1>Kauan Lemos</h1>
            <h3>Engenheiro de Software</h3>
            <p>
              Engenheiro de Software apaixonado por criar soluções digitais
              eficientes e escaláveis. Transformo ideias em sistemas robustos,
              combinando tecnologia, desempenho e experiência do usuário.
            </p>
          </div>
          <div className="hero-image">
            <img src={HeroImage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
