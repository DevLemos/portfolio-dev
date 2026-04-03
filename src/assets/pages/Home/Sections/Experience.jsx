import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <motion.section
        id="experiencias"
        className="experience-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="experience-content">
            <h2>
              Minhas experiências de trabalho<span>.</span>
            </h2>
            <div className="experience-description">
              <div className="experience-decoration">
                <motion.span
                  className="ball-decoration"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(59,130,246,0.5)",
                      "0 0 25px rgba(59,130,246,1)",
                      "0 0 0px rgba(59,130,246,0.5)",
                    ],
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
              </div>
              <div className="company-description">
                <div className="company-name">
                  <div className="company-icon">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      style={{ color: "#adbedd" }}
                    />
                  </div>
                  <h3>IT4 Finance, São Paulo</h3>
                </div>
                <span>Maio 2023 - 2026</span>
              </div>
              <div className="company-job-description">
                <h3>Estagiário de Desenvolvimento</h3>
                <p>
                  Atuou na modernização de sistema legado financeiro, realizando
                  migração de tecnologias obsoletas (Silverlight, WCF, ASPX)
                  para stack tecnológico atual. Desenvolvimento de interface
                  moderna com HTML, CSS e JavaScript, criação de APIs em C# e
                  otimização de estruturas SQL, resultando em sistema mais
                  performático e escalável.
                </p>
                <h3>Programador Júnior</h3>
                <p>
                  Atuou na modernização de sistema legado financeiro, realizando
                  migração de tecnologias obsoletas (Silverlight, WCF, ASPX)
                  para stack tecnológico atual. Desenvolvimento de interface
                  moderna com HTML, CSS e JavaScript, criação de APIs em C# e
                  otimização de estruturas SQL, resultando em sistema mais
                  performático e escalável.
                </p>
              </div>
              <span className="line-decoration"></span>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
