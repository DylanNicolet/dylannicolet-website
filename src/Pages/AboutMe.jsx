import React from "react"
import image from "../Images/about-page_image.webp"

export default function AboutMe(){
    return(
        <section className="about-me">
            <h1 className="about-me__title">About Me</h1>

            <section className="about-me__container">
                <section className="about-me__image-container">
                    <img className="about-me__planet-image" src={image} alt="decorative planet" />
                </section>
                
                <section className="about-me__text">
                    <p>After touching a bit of HTML/CSS here and there thoughout 2018 - 2019 by pure and simple curiousity, something sparked in me.</p>
                    <br />
                    <p>It was my newfound interest and amazement at what beautiful things could be created with a few lines of codes.</p> 
                    <br />
                    <p>So here I am now, a few years later with an OpenClassrooms diploma in Front-end Web developement and a strong will to persues this coded dream.</p>
                    <br />
                    <p>Curently specialising in the javaScript framework React and it's components, I intend to ultimatly expand my knowledge to the backend, thus becoming one day Full-stack.</p>
                </section>
                
            </section>
        </section>
    )
}