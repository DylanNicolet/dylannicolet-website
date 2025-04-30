import React from "react";
import git from "../Images/git-logo.png"
import html from "../Images/html-logo.png"
import css from "../Images/css-logo.png"
import sass from "../Images/sass-logo.png"
import js from "../Images/js-logo.png"
import react from "../Images/react-logo.png"
import redux from "../Images/redux-logo.png"
import zustand from "../Images/zustand-logo.png"
import router from "../Images/router-logo.png"

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
                <img src={git} alt="GitHub"  className="hero__tech-icon"/>
                <img src={html} alt="HTML 5" className="hero__tech-icon"/>
                <img src={css} alt="CSS 3" className="hero__tech-icon"/>
                <img src={sass} alt="SASS/SCSS"  className="hero__tech-icon"/>
                <img src={js} alt="JavaScript"  className="hero__tech-icon"/>
                <img src={react} alt="React"  className="hero__tech-icon"/>
                <img src={redux} alt="React Redux"  className="hero__tech-icon"/>
                <img src={zustand} alt="React Redux"  className="hero__tech-icon"/>
                <img src={router} alt="React Router"  className="hero__tech-icon"/>
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