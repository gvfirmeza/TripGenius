import React from "react";
import "./Body.css";
import Aviao from "./aviao.jpg";
import Aventureira from "./aventureira.svg";

const Body = () => {
  return (
    <body>

      <section className="section1">
        <container className="container">
          <div className="div-esq">
            <h1>
              Planeje sua viagem de forma simples e intuitiva, sem complicações.
            </h1>
            <p>
              Combinando tecnologia avançada e inteligência artificial,
              oferecemos roteiros personalizados que transformam suas
              preferências em experiências únicas.
            </p>
            <a href="#a" className="link">Comece Já</a>
          </div>
          <div>
            <img className="img" alt="aviao" src={Aviao} />
          </div>
        </container>
      </section>

      <section className="section2">
        <container className="container">
          <div>
            <img className="img" alt="aventureira" src={Aventureira} />
          </div>
          <div className="div-dir">
            <h1>Vantagens do Nosso Aplicativo</h1>
            <p>
              Explore um novo horizonte em suas viagens com nosso aplicativo. Descubra como tornamos o planejamento de viagens simples, intuitivo e adaptado às suas preferências.
            </p>
            <ul className="features">
              <li>Planejamento de viagens personalizado</li>
              <li>Experiências únicas e inesquecíveis</li>
              <li>Inteligência artificial avançada</li>
              <li>Aplicativo intuitivo e fácil de usar</li>
            </ul>
          </div>
        </container>
      </section>

      <section className="section1"></section>

    </body>
  );
};

export default Body;
