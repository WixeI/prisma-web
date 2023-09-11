import React from "react";
import Logo from "../Logo";
import * as Popover from "@radix-ui/react-popover";
import { List, X } from "phosphor-react";

function Header() {
  return (
    <header className="absolute z-10 flex w-full items-center justify-between px-8 py-1 lg:px-20">
      <Logo className="h-10 w-auto lg:h-14" />
      <nav className="hidden items-center gap-8 text-neutral-50 lg:flex">
        <a
          className="rounded-lg px-4 py-2 lg:drop-shadow-[0px_1px_1px_rgba(0,0,0,1)]"
          href="#services"
        >
          Serviços Ofertados
        </a>
        <a
          className="rounded-lg px-4 py-2 lg:drop-shadow-[0px_1px_1px_rgba(0,0,0,1)]"
          href="#about-us"
        >
          Sobre Nós
        </a>
        <a
          className="rounded-lg px-4 py-2 lg:drop-shadow-[0px_1px_1px_rgba(0,0,0,1)]"
          href="#our-process"
        >
          Nosso Processo
        </a>
        <a
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-50 px-3 py-2 transition-all hover:-translate-y-1 lg:drop-shadow-[0px_1px_4px_rgba(0,0,0,1)]"
          href="#contact-us"
        >
          Entre em Contato
        </a>
      </nav>

      {/* Mobile */}
      <Popover.Root>
        <Popover.Trigger
          aria-label="Menu de Navegação"
          className="flex items-center lg:hidden"
        >
          <List size="2.5rem" className="text-neutral-50" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            sideOffset={16}
            className="relative z-50 flex flex-col gap-4 rounded-lg rounded-r-none bg-neutral-50 p-4 text-neutral-900 shadow-[0px_8px_4px_rgba(0,0,0,0.25)] data-[state=open]:animate-slideLeftAndFade lg:hidden"
          >
            <Popover.Close aria-label="Fechar" className="sr-only">
              <X size="1.5rem" />
            </Popover.Close>

            <nav className="flex flex-col items-center gap-2 text-end text-neutral-900 transition-all">
              <a
                className="w-full py-4 hover:text-primary-500"
                href="#services"
              >
                Serviços Ofertados
              </a>
              <a
                className="w-full py-4 hover:text-primary-500"
                href="#about-us"
              >
                Sobre Nós
              </a>
              <a
                className="w-full py-4 hover:text-primary-500"
                href="#our-process"
              >
                Nosso Processo
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary-500 px-4 py-3 font-medium text-primary-500 transition-all hover:bg-primary-50"
                href="#contact-us"
              >
                Entre em Contato
              </a>
            </nav>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </header>
  );
}

export default Header;
