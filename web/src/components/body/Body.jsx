import React from "react";
import { Link } from "react-router-dom";
import Aviao from "./aviao.jpg";
import Aventureira from "./aventureira.svg";
import Hiker from "./hiker.jpeg";
import "./Body.css";

import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';

const Body = () => {
  const firstSectionTitle = "Planeje sua viagem de forma simples e intuitiva, sem complicações.".split(" ");

  const MotionSectionReveal = (props) => {
    const deslocation = 100;

    return (
      <motion.div
        initial={{
          opacity: 0,
          x: props.index % 2 === 0 ? deslocation : deslocation * -1
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5
          }
        }}
        viewport={{ once: true }}
      >
        {props.children}
      </motion.div>
    );
  };

  const FadeSectionReveal = (props) => {

    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2
          }
        }}
        viewport={{ once: true }}
      >
        {props.children}
      </motion.div>
    );
  };

  return (
    <div>
      <section className="page-section section1">
        <div className="container">
          <div className="div-esq">
            <h1>
              {firstSectionTitle.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </h1>
            <p>
              Combinando tecnologia avançada e inteligência artificial,
              oferecemos roteiros personalizados que transformam suas
              preferências em experiências únicas.
            </p>
            <Link to="/signup" className="link">
              Comece Já
            </Link>
          </div>
          <div>
            <img className="img" alt="aviao" src={Aviao} />
          </div>
        </div>
      </section>

      <section className="page-section section2">
        <MotionSectionReveal index={2}>
          <div className="container">
            <div>
              <img className="img" alt="aventureira" src={Aventureira} />
            </div>
            <div className="div-dir">
              <h1>Vantagens do Nosso Aplicativo</h1>
              <p>
                Explore um novo horizonte em suas viagens com nosso aplicativo.
                Descubra como tornamos o planejamento de viagens simples,
                intuitivo e adaptado às suas preferências.
              </p>
              <ul className="features">
                <li>Planejamento de viagens personalizado</li>
                <li>Experiências únicas e inesquecíveis</li>
                <li>Inteligência artificial avançada</li>
                <li>Aplicativo intuitivo e fácil de usar</li>
              </ul>
            </div>
          </div>
        </MotionSectionReveal>
      </section>

      <section className="page-section section1">
        <FadeSectionReveal>
          <div className="container">
            <div className="div-esq">
              <h1>Inscreva-se Já e <br />
                <ReactTyped
                  strings={[
                    "Viaje Sem Limites!",
                    "Explore Novos Horizontes!",
                    "Viva Experiências Únicas!"
                  ]}
                  typeSpeed={80}
                  backSpeed={40}
                  loop
                  className="span-b"
                />
              </h1>
              <p>
                Assine agora e mergulhe em roteiros personalizados ilimitados que
                transformam suas viagens em experiências inesquecíveis. Seja o
                protagonista de cada jornada, com acesso exclusivo a aventuras
                feitas sob medida para você.
              </p>
              <Link to="/signup" className="link">
                Comece Grátis
              </Link>
              <Link to="/plans" className="saiba">
                ▸ Saiba Mais
              </Link>
            </div>
            <div>
              <img className="img2" alt="aviao" src={Hiker} />
            </div>
          </div>
        </FadeSectionReveal>
      </section>
    </div>
  );
};

export default Body;