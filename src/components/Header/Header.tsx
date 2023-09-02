import React from "react";
import Logo from "../Logo";

function Header() {
  return (
    <header className="flex w-full items-center justify-between px-24 py-3">
      <Logo />
      <nav className="text-neutral-50 flex gap-8 items-center">
        <a href="#services">Serviços Ofertados</a>
        <a href="#about-us">Sobre Nós</a>
        <a href="#our-process">Nosso Processo</a>
        <a
          className="px-3 py-2 flex gap-2 items-center justify-center rounded-lg border-2 hover:-translate-y-1 border-neutral-50 transition-all"
          href="#contact-us"
        >
          Entre em Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
