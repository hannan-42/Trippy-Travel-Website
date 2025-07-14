import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import AboutImg from '../../assets/2.jpg'
import Footer from '../../components/Footer/Footer'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <>
        <Navbar />
         <Hero
        clName="hero-mid"
        heroImg = {AboutImg}
        title="Contact"
        url="/"
        btnClass="hide"
        />
        <ContactForm />
        <Footer />
        </>
    )
}

export default Contact
