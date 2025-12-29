import React from 'react';
import Logo from '../../../../public/favicon.svg';
import IconMenu from '../../img/menu.svg';
import './Navbar.css';

export default function Navbar() {
  const links = [
    { name: 'Início', href: '#' },
    { name: 'Sobre mim', href: '#sobremim' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Conhecimentos', href: '#conhecimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="navbar">
        <img className="logo" src={Logo} alt="Logo K" />

        <button className="btn-menu" onClick={() => setOpen(!open)}>
          <img src={IconMenu} alt="Icone Menu" />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
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
