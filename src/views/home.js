import React, { useEffect } from 'react'
import Pricing from '../Components/Pricing';
import Footer from '../Layouts/footer';
import Header from '../Layouts/header';
import Service from '../Components/Service';
import Team from '../Components/Team';
import Contact from '../Components/Contact';
import Count from '../Components/Count';
import Bannier from '../Components/Bannier';
import About from '../Components/About';
import Why_us from '../Components/Why_us';

  
const Home = (props) => {
  
    return (
        <div className="App">
            <Header />
            <Bannier />
            <main id="main">
                <About />
                <Why_us />
                <Count />
                <Service />
                <Team />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home