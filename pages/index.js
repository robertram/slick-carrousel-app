import Head from 'next/head'
import SimpleSlider from './components/SimpleSlider';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        
      </Head>

      <main>
        <SimpleSlider/>

      </main>


      <style jsx global>{`
        
      `}</style>
    </div>
  )
}
