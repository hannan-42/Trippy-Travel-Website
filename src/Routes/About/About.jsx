import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import AboutImg from "../../assets/night.jpg"
import Footer from '../../components/Footer/Footer'
import AboutUs from './AboutUs'

function About() {
    return (
    <>
       <Navbar />
       <Hero
        clName="hero-mid"
        heroImg = {AboutImg}
        title="About"
        url="/"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
    </>
    )
}

export default About
