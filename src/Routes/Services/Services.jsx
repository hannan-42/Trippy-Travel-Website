import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ServiceImg from '../../assets/4.jpg'
import Footer from '../../components/Footer/Footer'
import Trip from '../../components/Trip/Trip'

function Services() {
    return (
        <>
        <Navbar/>
          <Hero
        clName="hero-mid"
        heroImg = {ServiceImg}
        title="Services"
        url="/"
        btnClass="hide"
          />
        <Trip />
        <Footer />
        </>
    )
}

export default Services
