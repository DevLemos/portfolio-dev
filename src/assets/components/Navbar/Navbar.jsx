import React from "react";
import Logo from "../../../../public/favicon.svg";
import IconMenu from "../../img/menu.svg";
import CloseMenu from "../../img/xmark-solid-full.svg";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobremim" },
    { name: "Experiências", href: "#experiencias" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="navbar">
        <img className="logo" src={Logo} alt="Logo K" />

        <button className="btn-menu" onClick={() => setOpen(!open)}>
          <img src={IconMenu} alt="Icone Menu" />
        </button>

        <button
          className="btn-close"
          style={{ display: open ? "block" : "none" }}
          onClick={() => setOpen(false)}
        >
          <img src={CloseMenu} alt="Icone de x para fechar o menu" />
        </button>

        {/* <span className="decoration-line"></span> */}

        <nav id="navbarId" className={`nav-links ${open ? "open" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
