// import PhotoAbout from "../../../img/img-kauan-2.svg";
import PhotoAbout from "../../../img/animacao-kauan.png";
import CodeIcon from "../../../img/code-icon.svg";
import UsersIcon from "../../../img/users-solid.svg";
import RocketIcon from "../../../img/rocket-icon.svg";
import CrosshairsIcon from "../../../img/crosshairs-solid-full.svg";
import { motion } from "motion/react";
import "./About.css";

const About = () => {
  const cards = [
    {
      id: 1,
      CaminhoIcon: CodeIcon,
      CorIcone: "#1A202B",
      Titulo: "Qualidade e boas práticas",
      TextoAlternativo: "Icone de código",
      Descricao:
        "Comprometido com código limpo, bem estruturado e escalável," +
        " aderente a padrões de engenharia de software que garantem desempenho" +
        " e qualidade nas aplicações.",
    },
    {
      id: 2,
      CaminhoIcon: UsersIcon,
      CorIcone: "#6C7D9C",
      Titulo: "Colaboração",
      TextoAlternativo: "Icone de Usuários",
      Descricao:
        "Trabalho bem em equipe e adoro compartilhar conhecimento com outros " +
        "engenheiros.",
    },
    {
      id: 3,
      CaminhoIcon: RocketIcon,
      CorIcone: "#0C172A",
      Titulo: "Performance",
      TextoAlternativo: "Icone de Foguete",
      Descricao:
        "Otimização e performance são prioridades em cada projeto que " +
        "desenvolvo.",
    },
    {
      id: 4,
      CaminhoIcon: CrosshairsIcon,
      CorIcone: "#051923",
      Titulo: "Proatividade e Autonomia",
      TextoAlternativo: "Icone de Alvo",
      Descricao:
        "Gosto de antecipar problemas, propor melhorias e soluçãoes para a " +
        "resolução dos problemas e assumir a responsabilidade pelas soluções.",
    },
  ];

  return (
    <>
      <motion.section
        id="sobre"
        className="about-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="about-content">
            <h2 className="about-description-title">
              Um pouco sobre a minha história e o que me motiva<span>.</span>
            </h2>
            <div className="about-section-description">
              {/* <h2 className="about-section-title">
                Sobre mim<span>.</span>
              </h2> */}

              <p className="about-description">
                Me chamo Kauan Lemos, formado em Ciência da Computação pela
                Uninove e Engenheiro de Software. Apaixonado por tecnologia e
                por transformar ideias em soluções robustas e escaláveis. MInha
                jornada no mundo da tecnologia começou com curiosidade e evoluiu
                para uma paixão por criar experiências digitais que fazem a
                diferença.
              </p>
            </div>

            <div className="about-image">
              <img src={PhotoAbout} alt="Foto minha" />
            </div>

            <div className="about-cards-content">
              {cards.map((card) => (
                <div key={card.id} className="about-card">
                  <div className="about-card-header">
                    <div
                      className="about-card-icon"
                      style={{ backgroundColor: card.CorIcone }}
                    >
                      <img src={card.CaminhoIcon} alt={card.TextoAlternativo} />
                    </div>
                    <h3>{card.Titulo}</h3>
                  </div>
                  <p>{card.Descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
