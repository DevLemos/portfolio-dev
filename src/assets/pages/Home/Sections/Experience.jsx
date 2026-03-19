import { motion } from "motion/react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <motion.section
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
              <div className="company-description">
                <h3>IT4 Finance, São Paulo</h3>
                <p></p>
                <span>Maio 2023 - 2026</span>
              </div>
              <div className="experience-decoration">
                <div className="decoration-content">
                  <motion.span
                    className="ball-decoration"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(59,130,246,0.5)",
                        "0 0 20px rgba(59,130,246,0.8)",
                        "0 0 0px rgba(59,130,246,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  ></motion.span>
                </div>
                <span className="line-decoration"></span>
              </div>
              <div className="company-job-description">
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
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
