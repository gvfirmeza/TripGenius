import React from "react";
import "./Body.css";
import Aviao from "./aviao.jpg";

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
            <a href="#" className="link">Comece Já</a>
          </div>
          <div>
            <img className="img" src={Aviao}/>
          </div>
        </container>
      </section>

      <section className="section2"></section>

      <section className="section1"></section>
    </body>
  );
};

export default Body;
