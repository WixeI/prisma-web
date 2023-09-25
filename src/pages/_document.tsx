import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br">
      {/* Meta Tags */}
      <title>Prisma Web - Soluções Tecnológicas Sob Medida</title>
      <meta
        name="description"
        content="Criamos produtos especializados para o contexto de seu negócio. Precisa de orientação? Marque uma conversa!."
      />
      <meta name="author" content="Prisma Web" />
      <meta
        name="keywords"
        content="Prisma Web, software house, solução digital, desenvolvimento, software, web, mobile, design, programa, fazer site, site, portfolio, landing page, presença digital, empresa, negócio"
      />

      {/* Open Graph Tags */}
      <meta
        property="og:title"
        content="Prisma Web - Soluções Tecnológicas Sob Medida"
      />
      <meta
        property="og:description"
        content="Criamos produtos especializados para o contexto de seu negócio. Precisa de orientação? Marque uma conversa!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://prismaweb.netlify.app/" />
      <meta
        property="og:image"
        content="https://imagizer.imageshack.com/img922/5474/SX0zvE.png"
      />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Prisma Web - Soluções Tecnológicas Sob Medida"
      />
      <meta
        name="twitter:description"
        content="Criamos produtos especializados para o contexto de seu negócio. Precisa de orientação? Marque uma conversa!"
      />
      <meta
        name="twitter:image"
        content="https://imagizer.imageshack.com/img922/5474/SX0zvE.png"
      />

      {/* Others */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon-borderless.svg" sizes="any" />

        {/* Analytics */}
        <Script
          src="www.googletagmanager.com/gtag/js?id=G-8GKTC76PDN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-8GKTC76PDN');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
