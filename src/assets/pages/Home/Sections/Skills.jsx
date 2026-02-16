import HtmlIcon from "../../../img/html.svg";
import CSSIcon from "../../../img/Vector.svg";
import JavaScriptIcon from "../../../img/javascript-icon.svg";
import ReactIcon from "../../../img/react-icon.svg";
import PythonIcon from "../../../img/python-icon.svg";
import CsharpIcon from "../../../img/csharp-icon.svg";
import SqlIcon from "../../../img/sql-icon.svg";
import PhpIcon from "../../../img/php-icon.svg";
import FigmaIcon from "../../../img/figma-icon.svg";
import "./Skills.css";

const Skills = () => {
  const cards = [
    {
      id: 1,
      linguagem: "Html",
      caminhoIcon: HtmlIcon,
      textoAlternativo: "",
    },
    {
      id: 2,
      linguagem: "Css",
      caminhoIcon: CSSIcon,
      textoAlternativo: "",
    },
    {
      id: 3,
      linguagem: "JavaScript",
      caminhoIcon: JavaScriptIcon,
      textoAlternativo: "",
    },
    {
      id: 4,
      linguagem: "React",
      caminhoIcon: ReactIcon,
      textoAlternativo: "",
    },
    {
      id: 5,
      linguagem: "Python",
      caminhoIcon: PythonIcon,
      textoAlternativo: "",
    },
    {
      id: 6,
      linguagem: "C#",
      caminhoIcon: CsharpIcon,
      textoAlternativo: "",
    },
    {
      id: 7,
      linguagem: "SQL",
      caminhoIcon: SqlIcon,
      textoAlternativo: "",
    },
    {
      id: 8,
      linguagem: "PHP",
      caminhoIcon: PhpIcon,
      textoAlternativo: "",
    },
    {
      id: 9,
      linguagem: "Figma",
      caminhoIcon: FigmaIcon,
      textoAlternativo: "",
    },
  ];

  return (
    <>
      <section className="skills-section">
        <div className="container">
          <p className="skills-section-title">Habilidades</p>
          <span className="skills-line"></span>
          {/* <h2>Habilidades</h2> */}
          <p className="skills-description-title">
            Tecnologias e ferramentas que domino e utilizo no dia a dia para
            criar soluções incriveis.
          </p>
          <div className="skills-card-content">
            {cards.map((card) => (
              <div key={card.linguagem} className="skills-card">
                <span>{card.linguagem.toUpperCase()}</span>
                <img src={card.caminhoIcon} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
