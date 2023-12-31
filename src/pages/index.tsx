import Header from "@/components/Header";
import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import Card from "@/components/Card";
import Step from "@/components/Step";
import Contact from "@/components/Contact";
// import SendButton from "@/components/SendButton";

import { mailDataSchema, MailData } from "@/types/mail";

import { useRef } from "react";

import { WhatsappLogo, PhoneCall, CircleNotch } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const postEmail = async (data: MailData) => {
  return axios.post("/api/sendEmail", data);
};

export default function Home() {
  const sendEmailMutation = useMutation(postEmail);

  const { register, handleSubmit, formState, setValue } = useForm<MailData>({
    resolver: zodResolver(mailDataSchema),
  });

  const formRef = useRef<HTMLDivElement>(null);

  const onSubmit: SubmitHandler<MailData> = async (data) => {
    try {
      // Call the sendEmailMutation with the form data
      await sendEmailMutation.mutateAsync(data);

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  const changeFormTopic = (topic: MailData["topic"]) => {
    setValue("topic", topic);
  };

  const isMobileView = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="flex flex-col bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center gap-8 overflow-hidden px-11 md:items-start md:px-16">
          <motion.h1
            className="z-10 max-w-md text-center text-3xl font-medium text-neutral-50 drop-shadow-[0px_0px_2px_rgba(255,255,255,0.2)] md:text-start md:text-4xl lg:text-neutral-900 lg:drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)]"
            {...{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 0.2,
              },
            }}
          >
            Construindo o Futuro Digital do seu Negócio
          </motion.h1>
          <motion.div
            className="z-10"
            {...{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 0.4,
              },
            }}
          >
            <Button
              as="a"
              href="#services"
              className="shadow-[0px_4px_8px_rgba(0,0,0,0.5)] md:text-lg"
            >
              Explore Nossas Soluções
            </Button>
          </motion.div>

          <picture>
            <source
              media="(min-width:1024px)"
              srcSet="/hero/hero-desktop.jpg"
            />
            <img
              src="/hero/hero-mobile.jpg"
              alt=""
              className="absolute bottom-[30svh] left-0 max-w-none -rotate-12 rounded-[2rem] object-cover object-center shadow-[0px_4px_8px_rgba(0,0,0,0.5)] drop-shadow-[-24px_32px_0px_#DE2D59] md:translate-x-6 lg:left-1/3 lg:translate-x-28 lg:brightness-150 portrait:h-full landscape:w-[150%] lg:landscape:w-3/4"
            />
          </picture>
        </section>

        {/* TargetAudience */}
        <section
          id="target-audience"
          className="flex flex-col items-center justify-center gap-4 overflow-x-hidden bg-neutral-900 py-6 text-neutral-50 lg:my-8"
        >
          <Marquee
            itemList={[
              "Clínicas",
              "Dentistas",
              "Advogados",
              "Restaurantes",
              "Professores",
              "Boutiques",
              "Salões de Beleza",
              "Arquitetos",
              "Academias",
              "Consultoria",
              "Concessionárias",
            ]}
          />

          <h1 className="px-4 text-center text-xl sm:text-2xl lg:text-3xl">
            Destinado a Empresas e Prestadores de Serviço
          </h1>

          <Marquee
            itemList={[
              "Agências de Viagem",
              "Construção Civil",
              "Médicos",
              "Instituições de Ensino",
              "Fotógrafos",
              "Serviços de Transporte",
              "Hotéis",
              "Espaços de Eventos",
              "Oficinas Automotivas",
              "Clubes de Esportismo",
            ]}
            direction="right"
          />
        </section>

        {/* Services */}
        <div id="services" className="relative overflow-x-hidden">
          <section className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-4 py-8 md:gap-16 md:py-16">
            <h1 className="text-3xl font-bold md:text-4xl md:drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
              Serviços Oferecidos
            </h1>

            {/* Options */}
            <div className="flex flex-col gap-12 md:gap-16">
              {/* DigitalSolutions */}
              <motion.div
                className="z-10 flex flex-col gap-8 rounded-lg border border-neutral-100 bg-neutral-50/70 px-4 py-8 shadow-lg backdrop-blur-md md:flex-row md:border-none md:bg-transparent md:shadow-none"
                //Motion
                {...(isMobileView
                  ? {
                      initial: { opacity: 0, y: 25 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: {
                        type: "tween",
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      viewport: { once: true },
                    }
                  : {
                      initial: { opacity: 0, x: 100 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: {
                        type: "tween",
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      viewport: { once: true },
                    })}
              >
                <img
                  src="/services/digital-solutions.svg"
                  alt=""
                  className="max-h-32 md:max-h-max md:max-w-[240px]"
                />
                <div className="flex flex-col items-center justify-center gap-4 text-start md:items-start md:text-start">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Soluções Digitais
                  </h2>

                  <div className="flex flex-col gap-1 text-lg">
                    <p>
                      O sistema que usa não atende a todas as suas necessidades?
                    </p>
                    <p>
                      Sente que certos processos poderiam ser mais eficientes?
                    </p>
                    <p>
                      Traga-os e criaremos produtos especializados para levar a
                      melhor experiência para sua empresa.
                    </p>
                  </div>
                  <Button
                    as="a"
                    href="#contact-form"
                    onClick={() => changeFormTopic("digitalSolutions")}
                    className="mt-2"
                  >
                    Vamos Conversar
                  </Button>
                </div>
              </motion.div>

              {/* Hotsites */}
              <motion.div
                className="z-10 flex flex-col gap-8 rounded-lg border border-neutral-100 bg-neutral-50/70 px-4 py-8 shadow-lg backdrop-blur-md md:flex-row-reverse md:border-none md:bg-transparent md:shadow-none"
                //Motion
                {...(isMobileView
                  ? {
                      initial: { opacity: 0, y: 25 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: {
                        type: "tween",
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      viewport: { once: true },
                    }
                  : {
                      initial: { opacity: 0, x: -100 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: {
                        type: "tween",
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      viewport: { once: true },
                    })}
              >
                <img
                  src="/services/hotsites.svg"
                  alt=""
                  className="max-h-32 md:max-h-max md:max-w-[240px]"
                />
                <div className="flex flex-col items-center justify-center gap-4 text-start md:items-start md:text-start">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Hotsites
                  </h2>

                  <div className="flex flex-col gap-1 text-lg">
                    <p>
                      Sites temporários utilizados para divulgar produtos ou
                      eventos.
                    </p>
                    <p>São muito comuns em campanhas publicitárias.</p>
                  </div>

                  <Button
                    as="a"
                    href="#contact-form"
                    onClick={() => changeFormTopic("hotsites")}
                    className="mt-2"
                  >
                    Quero Divulgar Algo
                  </Button>
                </div>
              </motion.div>

              {/* DigitalPresence */}
              <motion.div
                className="z-10 flex flex-col gap-8 rounded-lg border border-neutral-100 bg-neutral-50/70 px-4 py-8 shadow-lg backdrop-blur-md md:flex-row md:border-none md:bg-transparent md:shadow-none"
                //Motion
                {...(isMobileView
                  ? {
                      initial: { opacity: 0, y: 25 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: {
                        type: "tween",
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      viewport: { once: true },
                    }
                  : {
                      initial: { opacity: 0, x: 100 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: {
                        type: "tween",
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      viewport: { once: true },
                    })}
              >
                <img
                  src="/services/digital-presence.svg"
                  alt=""
                  className="max-h-32 md:max-h-max md:max-w-[240px]"
                />
                <div className="flex flex-col items-center justify-center gap-4 text-start md:items-start md:text-start">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    Presença Digital
                  </h2>

                  <div className="flex flex-col gap-1 text-lg">
                    <p>
                      Um site oficial para seu negócio traz legitimidade para a
                      marca e confiança para o cliente.
                    </p>
                    <p>Pode ser o diferencial entre a concorrência.</p>
                  </div>

                  <Button
                    as="a"
                    href="#contact-form"
                    onClick={() => changeFormTopic("digitalPresence")}
                    className="mt-2"
                  >
                    Quero Me Destacar
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Background */}
          <div className="select-none">
            <motion.img
              src="/misc/triangle-primary-50.svg"
              alt=""
              className="absolute -left-20 top-8 -rotate-45 md:scale-150"
              {...{
                animate: {
                  x: [0, 25],
                  y: [0, 25],
                  rotate: [0, 8, -16],
                },
                transition: {
                  x: {
                    ease: "easeInOut",
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  y: {
                    ease: "easeInOut",
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  rotate: {
                    ease: "easeInOut",
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                },
              }}
            />

            <motion.img
              src="/misc/triangle-primary-50.svg"
              alt=""
              className="absolute -right-20 bottom-1/3 -rotate-45 md:scale-150"
              {...{
                animate: {
                  x: [0, -25],
                  y: [0, 25],
                  rotate: [0, 8, -16],
                },
                transition: {
                  x: {
                    ease: "easeInOut",
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  y: {
                    ease: "easeInOut",
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  rotate: {
                    ease: "easeInOut",
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Values */}
        <div id="values" className="relative">
          <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8 md:flex-row md:py-12">
            <div className="z-10 flex flex-col items-center gap-4 text-center md:items-start md:gap-8 md:text-start">
              <h1 className="text-3xl font-semibold md:drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
                Transparência e Modernidade
              </h1>
              <div>
                <p className="text-lg">
                  Somos uma empresa que visa a solução que mais se adapta a
                  nossos clientes, e não vamos hesitar em sugerir caso produtos
                  já existentes resolvam seu problema!
                </p>
                <br />
                <p className="text-lg">
                  Além disso, utilizamos de código e design 100% feito sob
                  medida para seu negócio, para que tenha identidade própria e{" "}
                  <span className="font-medium text-primary-600">
                    se destaque na multidão!
                  </span>
                </p>
              </div>
            </div>
            {/* Todo: Get wide Image for Mobile and use Picture */}
            <img
              src="/values/values.jpg"
              alt=""
              className="z-10 -order-1 mx-auto w-full max-w-sm rounded-lg object-cover object-center shadow-lg drop-shadow-[-8px_8px_0px_#DE2D59] md:order-none md:aspect-[1/1.25] md:w-52 md:drop-shadow-[8px_8px_0px_#DE2D59]"
            />
          </section>

          {/* Background */}
          <img
            src="/misc/lightbulb.svg"
            alt=""
            className="absolute left-0 top-0 hidden -translate-x-1/2 select-none md:block"
          />
        </div>

        {/* Process */}
        <div id="process" className="relative overflow-hidden bg-neutral-100">
          {/* Background */}
          <img
            src="/misc/arrow-bg-neutral-50.svg"
            alt=""
            className="w-full select-none"
          />

          {/* Content */}
          <section className="-100 relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 pb-32 pt-8 md:gap-12 md:pb-48 md:pt-12">
            <h1 className="text-2xl font-semibold md:text-4xl md:drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
              Nosso Processo
            </h1>
            <ol className="flex flex-col gap-8 md:relative md:-translate-x-1/2">
              {/* Step 1 */}
              <li className="flex gap-3 md:gap-8">
                <Card
                  step="1"
                  title="Ideação"
                  description="Batemos um papo para entender sua necessidade e acertamos
                    juntos a melhor solução."
                  animDirection="left"
                  animDelay={0}
                />

                <Step step="1" />
              </li>

              {/* Step 2 */}
              <li className="flex gap-3 md:relative md:translate-x-[calc(100%-2.5rem)] md:flex-row-reverse md:gap-8">
                <Card
                  step="2"
                  title="Prototipação"
                  description="Após nossa conversa, criamos um protótipo.
                  Até este ponto, nada é cobrado e refinos são feitos em reuniões de alinhamento."
                  animDirection="right"
                  animDelay={0.5}
                />

                <Step step="2" animDelay={0.5} />
              </li>

              {/* Step 3 */}
              <li className="flex gap-3 md:gap-8">
                <Card
                  step="3"
                  title="Desenvolvimento"
                  description="Neste ponto, temos o protótipo final aprovado. Fazemos negociações, e começamos o desenvolvimento do produto!"
                  animDirection="left"
                  animDelay={1}
                />

                {/* Timeline Indicator */}
                <Step step="3" animDelay={1} />
              </li>

              {/* Step 4 */}
              <li className="flex gap-3 md:relative md:translate-x-[calc(100%-2.5rem)] md:flex-row-reverse md:gap-8">
                <Card
                  step="4"
                  title="Entrega"
                  description="As entregas são em formato incremental. Após a entrega final, oferecemos suporte gratuito por um mês!"
                  animDirection="right"
                  animDelay={1}
                />

                {/* Timeline Indicator */}
                <Step step="4" hasPath={false} />
              </li>
            </ol>
          </section>

          {/* Background */}
          <div className="select-none">
            <motion.img
              src="/misc/triangle-neutral-50.svg"
              alt=""
              className="absolute -right-12 top-1/3 -translate-y-1/2"
              {...{
                animate: {
                  scale: [1.5, 2],
                  rotate: [15, -90],
                  y: [0, 25],
                },
                transition: {
                  ease: "easeInOut",
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            />
            <motion.img
              src="/misc/triangle-neutral-50.svg"
              alt=""
              className="absolute -left-12 top-1/2"
              {...{
                animate: {
                  scale: [1, 1.5],
                  rotate: [15, 90],
                  y: [0, 25],
                },
                transition: {
                  ease: "easeInOut",
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            />

            <motion.img
              src="/misc/triangle-primary-500.svg"
              alt=""
              className="absolute bottom-0 left-8"
              {...{
                animate: {
                  y: [-25, -40],
                  rotate: [4, -4],
                },
                transition: {
                  ease: "easeInOut",
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            />
            <motion.img
              src="/misc/triangle-primary-500.svg"
              alt=""
              className="absolute bottom-0 left-1/4 hidden md:block"
              {...{
                animate: {
                  scale: [0.75],
                  y: [0, -15],
                  rotate: [16, 8],
                },
                transition: {
                  ease: "easeInOut",
                  duration: 5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            />
            <motion.img
              src="/misc/triangle-primary-500.svg"
              alt=""
              className="absolute bottom-0 right-8"
              {...{
                animate: {
                  y: [-25, -40],
                  rotate: [-4, 12],
                },
                transition: {
                  ease: "easeInOut",
                  duration: 5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            />
            <motion.img
              src="/misc/triangle-primary-500.svg"
              alt=""
              className="absolute bottom-0 right-1/4 hidden md:block"
              {...{
                animate: {
                  scale: [0.75],
                  y: [0, -15],
                  rotate: [-4, 4],
                },
                transition: {
                  ease: "easeInOut",
                  duration: 5,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            />
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="bg-primary-600" ref={formRef}>
          {/* Background */}
          <img
            src="/misc/arrow-bg-neutral-100.svg"
            alt=""
            className="w-full select-none"
          />

          {/* Content */}
          <section className="mx-auto flex max-w-5xl flex-col justify-center gap-12 px-4 py-12 text-neutral-50 md:flex-row">
            {/* Contacts Section */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold md:drop-shadow-[0px_0px_2px_rgba(255,255,255,0.2)]">
                  Vamos Construir Juntos?
                </h1>
                <p>Preencha o formulário ou entre em contato via:</p>
              </div>

              <section>
                <h2 className="sr-only">Contatos</h2>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Contact
                      Icon={PhoneCall}
                      ariaTitle="Ligação"
                      ariaRedirect="Abrir Telefone para Ligar"
                      contact="(85) 9 8147-9710"
                      href="tel:+85981479710"
                    />
                  </li>

                  <li>
                    <Contact
                      Icon={WhatsappLogo}
                      ariaTitle="WhatsApp"
                      ariaRedirect="Abrir WhatsApp"
                      contact="(85) 9 8147-9710"
                      href="https://api.whatsapp.com/send?phone=5585981479710"
                    />
                  </li>
                </ul>
              </section>
            </div>

            {/* Form Section */}
            <section
              id="contact-form"
              className="flex flex-col gap-4 rounded-lg bg-neutral-50 p-6 text-neutral-900 md:w-3/5"
            >
              <h2 className="text-2xl font-medium text-primary-600">
                Envie um Email
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <label className="flex w-full flex-col gap-2">
                    <span>Seu Nome</span>
                    <input
                      {...register("name")}
                      type="text"
                      className="min-h-[3rem] rounded-lg border border-neutral-900 px-4 py-2 transition-all focus:shadow-[0_0_0_4px] focus:shadow-primary-100/80 focus:outline-none"
                    />
                    {formState.errors.name && (
                      <p className="-mt-1 ml-2 animate-slideLeftAndFade cursor-text text-sm text-rose-500">
                        {formState.errors.name.message}
                      </p>
                    )}
                  </label>

                  <label className="flex w-full flex-col gap-2">
                    <span>Seu Email</span>
                    <input
                      {...register("email")}
                      type="text"
                      className="min-h-[3rem] rounded-lg border border-neutral-900 px-4 py-2 transition-all focus:shadow-[0_0_0_4px] focus:shadow-primary-100/80 focus:outline-none"
                    />
                    {formState.errors.email && (
                      <p className="-mt-1 ml-2 animate-slideLeftAndFade cursor-text text-sm text-rose-500">
                        {formState.errors.email.message}
                      </p>
                    )}
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span>Sobre o que deseja falar?</span>
                  <select
                    {...register("topic")}
                    className="min-h-[3rem] rounded-lg border border-neutral-900 px-4 py-2 transition-all focus:shadow-[0_0_0_4px] focus:shadow-primary-100/80 focus:outline-none"
                  >
                    <option defaultChecked value="general">
                      Assunto Geral
                    </option>
                    <option value="digitalSolutions">Soluções Digitais</option>
                    <option value="hotsites">Hotsites</option>
                    <option value="digitalPresence">Presença Digital</option>
                  </select>
                  {formState.errors.topic && (
                    <p className="-mt-1 ml-2 animate-slideLeftAndFade cursor-text text-sm text-rose-500">
                      {formState.errors.topic.message}
                    </p>
                  )}
                </label>

                <label className="flex flex-col gap-2">
                  <span>Sua Mensagem</span>
                  <textarea
                    {...register("message")}
                    className="min-h-[15rem] resize-y rounded-lg border border-neutral-900 px-4 py-2 text-base transition-all focus:shadow-[0_0_0_4px] focus:shadow-primary-100/80 focus:outline-none md:min-h-[12rem]"
                  />
                  {formState.errors.message && (
                    <p className="-mt-1 ml-2 animate-slideLeftAndFade cursor-text text-sm text-rose-500">
                      {formState.errors.message.message}
                    </p>
                  )}
                </label>

                <Button type="submit">
                  {sendEmailMutation.status === "idle" ? (
                    "Enviar Email"
                  ) : sendEmailMutation.status === "loading" ? (
                    <CircleNotch
                      weight="bold"
                      size={24}
                      className="animate-spin"
                    />
                  ) : sendEmailMutation.status === "success" ? (
                    "Enviado com Sucesso!"
                  ) : (
                    "Erro ao Enviar"
                  )}
                </Button>
                {/* <p>{sendEmailMutation.status}</p> */}
              </form>
              {/* <SendButton /> */}
            </section>
          </section>
        </div>
      </main>

      {/* Footer */}
      <div className="bg-primary-600">
        <img
          src="/misc/arrow-up-bg-neutral-900.svg"
          alt=""
          className="w-full select-none"
        />
        <footer className="flex items-center justify-center bg-neutral-900 py-8 text-neutral-50">
          <p>Prisma Web • 2023</p>
        </footer>
      </div>
    </div>
  );
}
