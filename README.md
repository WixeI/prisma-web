# PrismaWeb

**[PrismaWeb](https://prismaweb.com.br/)** é um projeto web moderno e responsivo, construído utilizando **Next.js** e uma variedade de ferramentas e bibliotecas avançadas, proporcionando uma base sólida para desenvolvimento rápido e eficiente. Este projeto destaca-se pelo uso de **React**, **TailwindCSS**, e uma forte integração com formulários e validações através de **React Hook Form** e **Zod**.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para produção, com suporte a renderização híbrida e geração de páginas estáticas.
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática ao código.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização moderna e responsiva.
- **[React Query](https://tanstack.com/query/latest)**: Gerenciamento de estado assíncrono para requisições e cache de dados.
- **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento simples e eficiente de formulários em React.
- **[Zod](https://zod.dev/)**: Biblioteca de validação de schemas TypeScript-first.
- **[Framer Motion](https://www.framer.com/motion/)**: Animações suaves e interativas para React.
- **[Phosphor Icons](https://phosphoricons.com/)**: Conjunto de ícones flexível e personalizável.
- **[Nodemailer](https://nodemailer.com/)**: Ferramenta para o envio de e-mails via Node.js.
- **[Axios](https://axios-http.com/)**: Cliente HTTP popular para realizar requisições ao backend.

## 🛠️ Ferramentas de Desenvolvimento

- **[ESLint](https://eslint.org/)**: Ferramenta para análise e padronização do código JavaScript/TypeScript.
- **[Prettier](https://prettier.io/)**: Formatador de código que garante um estilo consistente.
- **[Jest](https://jestjs.io/)**: Framework de testes JavaScript com foco em simplicidade e cobertura completa de testes.
- **[Testing Library](https://testing-library.com/)**: Ferramentas para teste de componentes React de forma acessível e intuitiva.
- **[Plop](https://plopjs.com/)**: Ferramenta de scaffolding para a criação de templates customizados.
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)**: Utilitário para combinar classes Tailwind de forma otimizada.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura de diretórios organizada para facilitar a escalabilidade e manutenção.

```bash
├── public/                # Arquivos públicos e estáticos
├── src/
│   ├── components/        # Componentes React reutilizáveis
│   ├── pages/             # Páginas da aplicação (Next.js routing)
│   ├── styles/            # Arquivos de estilização
│   ├── hooks/             # Custom Hooks
│   └── utils/             # Utilitários e helpers
├── tests/                 # Testes unitários e de integração
└── package.json           # Dependências e scripts do projeto
```

## 📜 Scripts Disponíveis

- `dev`: Executa o servidor de desenvolvimento.
- `build`: Compila o projeto para produção.
- `start`: Inicia o servidor em modo produção.
- `lint`: Executa a análise de lint para encontrar problemas no código.
- `plop`: Gera arquivos e componentes de acordo com templates predefinidos.
