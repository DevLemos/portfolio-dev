import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../../public/favicon.svg";
import IconMenu from "../../img/menu.svg";
import CloseMenu from "../../img/window-close-solid.svg";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Experiências", href: "#experiencias" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const mudancaTamanho = (e) => {
      if (e.matches) {
        setOpen(false);
      }
    };

    mediaQuery.addEventListener("change", mudancaTamanho);

    return () => {
      mediaQuery.removeEventListener("change", mudancaTamanho);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <img className="logo" src={Logo} alt="Logo K" />

        <button
          className={`btn-menu ${!open ? "active" : "hidden"}`}
          onClick={() => setOpen(!open)}
        >
          <img src={IconMenu} alt="Icone Menu" />
        </button>

        <>
          <AnimatePresence>
            {open && (
              <motion.div
                className="overlay"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          <motion.nav
            id="navbarId"
            className={`nav-links ${open ? "open" : ""}`}
            initial={false}
            animate={{ x: open ? 0 : "0%" }}
            // exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className={`btn-close ${open ? "active" : "hidden"}`}
              onClick={() => setOpen(false)}
            >
              <img src={CloseMenu} alt="Icone de x para fechar o menu" />
            </button>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </>

        {/* <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="overlay"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.nav
                id="navbarId"
                className={`nav-links ${open ? "open" : ""}`}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className={`btn-close ${open ? "active" : "hidden"}`}
                  onClick={() => setOpen(false)}
                >
                  <img src={CloseMenu} alt="Icone de x para fechar o menu" />
                </button>
                <ul>
                  {links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={() => setOpen(false)}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence> */}

        {/* <button
          className={`btn-close ${open ? "active" : "hidden"}`}
          onClick={() => setOpen(false)}
        >
          <img src={CloseMenu} alt="Icone de x para fechar o menu" />
        </button> */}

        {/* <nav id="navbarId" className={`nav-links ${open ? "open" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}
      </header>
    </>
  );
}
