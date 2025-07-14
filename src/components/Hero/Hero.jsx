import React from 'react'
import "./HeroStyle.css";

function Hero(props){
    return (
        <>
    <div className={props.clName} >
        <img src={props.heroImg} alt="Hero_Img" />

        <div className='Hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
            {props.btnText}
            </a>
        </div>
    </div>
        </>
    )
}

export default Hero
