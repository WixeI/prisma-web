import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { List, X } from "phosphor-react";

function Header() {
  return (
    <header className="absolute z-10 flex w-full items-center justify-between px-8 py-2 lg:px-20">
      <picture>
        {/* Logo */}
        <h1>
          <picture>
            <source media="(min-width:1024px)" srcSet="/logo.svg" />
            <img src="/logo-dark.svg" alt="" className="h-10 w-auto lg:h-14" />
          </picture>
          <span className="sr-only">Prisma Web</span>
        </h1>
      </picture>

      <nav className="hidden items-center gap-8 text-neutral-50 lg:flex">
        <a
          className="rounded-lg px-4 py-2 transition-all hover:scale-105 lg:drop-shadow-[0px_1px_1px_rgba(0,0,0,1)]"
          href="#services"
        >
          Serviços Oferecidos
        </a>
        <a
          className="rounded-lg px-4 py-2 transition-all hover:scale-105 lg:drop-shadow-[0px_1px_1px_rgba(0,0,0,1)]"
          href="#values"
        >
          Sobre Nós
        </a>
        <a
          className="rounded-lg px-4 py-2 transition-all hover:scale-105 lg:drop-shadow-[0px_1px_1px_rgba(0,0,0,1)]"
          href="#process"
        >
          Nosso Processo
        </a>
        <a
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-50 px-3 py-2 transition-all hover:bg-neutral-900/20 lg:drop-shadow-[0px_1px_4px_rgba(0,0,0,1)]"
          href="#contact-form"
        >
          Entre em Contato
        </a>
      </nav>

      {/* Mobile */}
      <Dialog.Root>
        <Dialog.Trigger
          aria-label="Menu de Navegação"
          className="flex items-center lg:hidden"
        >
          <List size="2.5rem" className="text-neutral-50" />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />

          <Dialog.Content className="fixed bottom-0 right-0 top-0 z-10 flex flex-col bg-neutral-50 p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-slideLeftAndFade">
            <Dialog.Close aria-label="Fechar" className="self-end">
              <X size="1.5rem" />
            </Dialog.Close>

            <nav className="flex flex-col items-center gap-2 text-start text-neutral-900 transition-all">
              <Dialog.Close className="w-full py-4 hover:text-primary-600">
                <a href="#services">Serviços Ofertados</a>
              </Dialog.Close>
              <Dialog.Close className="w-full py-4 hover:text-primary-600">
                <a href="#values">Sobre Nós</a>
              </Dialog.Close>
              <Dialog.Close className="w-full py-4 hover:text-primary-600">
                <a href="#process">Nosso Processo</a>
              </Dialog.Close>
              <Dialog.Close>
                <a
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary-600 px-4 py-3 font-medium text-primary-600 transition-all hover:bg-primary-50"
                  href="#contact-form"
                >
                  Entre em Contato
                </a>
              </Dialog.Close>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

export default Header;
