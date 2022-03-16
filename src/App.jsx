import React from 'react'
import Header from './assets/components/header/Header'
import Nav from './assets/components/nav/Nav'
import About from './assets/components/about/About'
import Experience from './assets/components/experience/Experience'
import Portfolio from './assets/components/portfolio/Portfolio'
import Contact from './assets/components/contact/Contact'
import Footer from './assets/components/footer/Footer'
import Certificate from './assets/components/certificate/Certificate'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Certificate />
        <Contact />
        <Footer />
    </>
  )
}

export default App