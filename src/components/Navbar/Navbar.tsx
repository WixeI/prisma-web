import React from 'react';
import Logo from '../Logo';

function Navbar() {
  return (
    <header>
      <Logo />
      <nav>
        <a href="#services">Serviços Ofertados</a>
        <a href="#about-us">Sobre Nós</a>
        <a href="#our-process">Nosso Processo</a>
        <a href="#contact-us">Entre em Contato</a>
      </nav>
    </header>
  );
};

export default Navbar;
