import Head from 'next/head';
import Image from 'next/image';
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
// import styles from '../styles/Home.module.css'

export default function Home() { 
  return (
    <div>
      <Head>
        <title>Gold dust AI</title>
        <meta name="Golddust AI" content="Gold dust AI consulting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Banner />
      <Content />
      <Cta />
      <Services />
      <Carousel/>
      <Team/>
      <Process/>
      <Cta2/>
      <Contact/>
      <Footer/>

    </div>


  )
}
