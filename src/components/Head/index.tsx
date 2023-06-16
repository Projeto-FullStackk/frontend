import Head from "next/head";

const HeadApp = () => {

  const title = "Motors shop";
  const description = "concessionária online para comprar ou vender um veículo.";
  const marketing = "Aqui você conta com uma experiência segura e 100% online. Confira!";

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={`${title}, ${description} ${marketing}`}
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      
      <meta name="theme-color" content="#4529E6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="msapplication-navbutton-color" content="#4529E6" />

      <link rel="manifest" href="/manifest/motors_shop.webmanifest" />
    </Head>
  )
}

export default HeadApp;
