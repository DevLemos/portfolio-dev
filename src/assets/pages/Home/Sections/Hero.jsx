import React from "react";
import { motion } from "motion/react";
import HeroImage from "../../../img/img-main.svg";
import LinkedinIcon from "../../../img/linkedin-icon.svg";
import GitHubIcon from "../../../img/github-icon.svg";
import FileIcon from "../../../img/file-arrow-down.svg";
import ArrowIcon from "../../../img/arrow-down-solid-full.svg";
import "./Hero.css";

const Hero = () => {
  const links = [
    { label: "GitHub", href: "https://github.com/DevLemos", icon: GitHubIcon },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/kauan-lemos",
      icon: LinkedinIcon,
    },
    {
      label: "Currículo",
      href: "/curriculo.pdf",
      icon: FileIcon,
      download: true,
    },
  ];

  return (
    <>
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div className="container">
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
              <div className="hero-contact">
                <ul>
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.download}
                      >
                        <img src={link.icon} style={{ width: 32 }} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hero-image">
              <img src={HeroImage} />
            </div>
            {/* <div className="hero-decoration">
              <span>Role para baixo</span>
              <img src={ArrowIcon} />
            </div> */}

            {/* <div className="mouse">
            <motion.span
              className="wheel"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div> */}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
