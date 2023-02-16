import React from "react";
import css from "../Images/css-logo.png"
import sass from "../Images/sass-logo.png"
import react from "../Images/react-logo.png"
import redux from "../Images/redux-logo.png"
import js from "../Images/js-logo.png"
import github from "../Images/github-logo.png"

export default function Hero(){

    //Rotates the center element according to cursor position
    function rotateElement(event){
        const x = event.clientX
        const y = event.clientY

        const middleX = window.innerWidth / 2
        const middleY = window.innerHeight / 2

        const offsetX = ((x - middleX) / middleX) * 45
        const offsetY = ((y - middleY) / middleY) * 45

        const element = document.getElementById("hero__text")

        element.style.setProperty("--rotateX", -1 * offsetY + "deg")
        element.style.setProperty("--rotateY", offsetX + "deg")
    }

    return(
        <section className="hero" onMouseMove={e => rotateElement(e)}>
            <h1 className="hero__title">{"< /Dylan Nicolet >"}</h1>

            <p className="hero__text" id="hero__text">
                Creating beautiful and functional websites that drive results
            </p>
            
            <section className="hero__tech-icon-container">
                <img src={css} alt="Css logo" className="hero__tech-icon"/>
                <img src={sass} alt="Sass logo"  className="hero__tech-icon"/>
                <img src={react} alt="React logo"  className="hero__tech-icon"/>
                <img src={redux} alt="Redux"  className="hero__tech-icon"/>
                <img src={js} alt="JavaScript logo"  className="hero__tech-icon"/>
                <img src={github} alt="GitHub logo"  className="hero__tech-icon"/>
            </section>

            <section className="hero__stars-container">
                <span className="hero__star"></span>
                <span className="hero__star"></span>
                <span className="hero__star"></span>
                <span className="hero__star"></span>
                <span className="hero__star"></span>
            </section>
        </section>
    )
}