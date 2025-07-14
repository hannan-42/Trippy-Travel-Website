    import React from 'react'
    import Navbar from '../../components/Navbar/Navbar'
    import Hero from '../../components/Hero/Hero'
    import About from '../About/About'
    import HomeImg from '../../assets/12.jpg'
    import Destination from '../../components/Destination/Destination'
    import Trip from '../../components/Trip/Trip'
import Footer from '../../components/Footer/Footer'
    

    function Home() {
        return (
        <>
        <Navbar />
        <Hero
        clName="hero"
        heroImg = {HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
        
        </>
        )
    }

    export default Home
