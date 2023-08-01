import Head from 'next/head';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Cta from '../components/Cta';
import Services from '../components/Services';
import Carousel from '../components/CarouselSlide';
import Team from '../components/Team';
import Process from '../components/process';
import Cta2 from '../components/Cta2';
import Contact from '../components/contact';
import Footer from '../components/Footer';
import Report from '../components/report';
// import styles from '../styles/Home.module.css'

export default function Home() { 
  return (
    <div>
      <Head>
        <title>Golddust AI</title>
        <meta name="Golddust AI" content="Maximize Profitability with AI Consulting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Banner />
      <Content />
      <Cta />
      <Services />
      <Carousel/>
      <Report
        content="According to a McKinsey report, generative AI has the potential to increase labor productivity by 0.1% to 0.6% annually translating to $2.6 to $4.4 trillion dollars annually through 2040, depending on the rate of technology adoption. Businesses that are slow to empower their teams through AI guided productivity will be left behind.
        "
      />
      <Team/>
      <Process/>
      <Cta2/>
      <Contact/>
      <Footer/>

    </div>


  )
}
