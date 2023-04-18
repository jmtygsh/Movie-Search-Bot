import Head from 'next/head'
import Landing from './Index/Landing'
export default function Home() {

  return (
    <>
      <Head>
        <title>Explore world of cinema - dumb-bots</title>
        <meta name="application-name" content="dumb-bots"></meta>
        <meta name="description" content="Your streaming guide for movies, TV shows & Animes with dumb-bots." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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
        <h1>hduu</h1>
      </Head>
      <main>
        <Landing />
      </main>
    </>
  )
}
