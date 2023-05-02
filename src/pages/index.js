import Head from 'next/head'
import Landing from './Index/Landing'
export default function Home() {

  return (
    <>
      <Head>
        <title>Explore world of cinema - dumb-bots</title>
        <meta name="application-name" content="dumb-bots"></meta>
        <meta name="description" content="Your streaming guide for movies, TV shows & Animes with dumb-bots so what are you waiting for now you can get all at one place." />
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://dumb-bots.online/"></link>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8526703730767941"
          crossorigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3072T6W158"></script>
        <script dangerouslySetInnerHTML={
          {
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3072T6W158');
         `}
        }>
        </script>
      </Head>
      <main>
        <Landing />
      </main>
    </>
  )
}
