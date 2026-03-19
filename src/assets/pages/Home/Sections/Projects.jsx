import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ProjectImage from "../../../img/bg-projects.png";
import reactIcon2 from "../../../img/react-icon-2.svg";
import viteIcon from "../../../img/vite-icon.svg";
import cssIcon2 from "../../../img/css-icon-2.svg";
import GithubIcon from "../../../img/github-icon.svg";
import CssIcon from "../../../img/css-icon.svg";
import ReactIcon from "../../../img/react-icon.svg";
import ExportIcon from "../../../img/export-icon.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Pet+",
      description: "Software para gestão de clínicas veterinárias.",
      pathImage: ProjectImage,
      technologies: [
        { name: "React", pathIcon: reactIcon2 },
        { name: "Vite", pathIcon: viteIcon },
        { name: "CSS", pathIcon: cssIcon2 },
      ],
    },
    {
      id: 2,
      name: "Pet+",
      description: "Software para gestão de clínicas veterinárias.",
      pathImage: ProjectImage,
      technologies: [
        { name: "React", pathIcon: ReactIcon },
        // { name: "Vite", pathIcon: "" },
        { name: "CSS", pathIcon: CssIcon },
      ],
    },
  ];

  return (
    <>
      <section className="projects-section">
        <div className="container">
          <p className="projects-section-title">Projetos</p>
          <p className="projects-description-title">
            Alguns dos projetos que desenvolvi recentemente. Cada um com seus
            desafios únicos e soluções criativas.
          </p>
          <div className="projects-content">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="project-card">
                    <img src={project.pathImage} className="project-img" />
                    <div className="project-card-content-description">
                      <div className="project-card-description-item">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                      </div>
                      <span className="description-title">Tecnologias</span>
                      <div className="content-technologies">
                        {project.technologies.map((technologie) => (
                          <div
                            key={technologie.name}
                            className="content-technologies-item"
                          >
                            <img
                              src={technologie.pathIcon}
                              style={{ width: "16px" }}
                            />
                            <span>{technologie.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-information">
                    <ul>
                      <li>
                        <img src={GithubIcon} />
                        <a href="">Código</a>
                      </li>
                      <li>
                        <img src={ExportIcon} />
                        <a href="">Demonstração</a>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
