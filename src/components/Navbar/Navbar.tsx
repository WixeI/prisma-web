import React from 'react';

function Navbar() {
  return (
    <header data-testid="navbar-main-div">
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
