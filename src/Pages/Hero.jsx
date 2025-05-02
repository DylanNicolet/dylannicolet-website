import React from "react"
import 'swiper/css'
import git from "../Images/git-logo.png"
import html from "../Images/html-logo.png"
import css from "../Images/css-logo.png"
import scss from "../Images/scss-logo.png"
import js from "../Images/js-logo.png"
import react from "../Images/react-logo.png"
import redux from "../Images/redux-logo.png"
import zustand from "../Images/zustand-logo.png"
import router from "../Images/router-logo.png"

export default function Hero(){
    // Rotates the center element according to cursor position
    function rotateElement(event) {
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
                Front-end development, done thoughtfully.
            </p>
            
            <section className="hero__tech-icon-container">
                <div className="tech-ticker">
                    <div className="tech-track">
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="tech-slide"><img src={git} alt="Git" /><p>GIT</p></div>
                                <div className="tech-slide"><img src={html} alt="HTML" /><p>HTML</p></div>
                                <div className="tech-slide"><img src={css} alt="CSS" /><p>CSS</p></div>
                                <div className="tech-slide"><img src={scss} alt="SCSS" /><p>SCSS</p></div>
                                <div className="tech-slide"><img src={js} alt="JS" /><p>JavaScript</p></div>
                                <div className="tech-slide"><img src={react} alt="React" /><p>React</p></div>
                                <div className="tech-slide"><img src={redux} alt="Redux" /><p>Redux</p></div>
                                <div className="tech-slide"><img src={zustand} alt="Zustand" /><p>Zustand</p></div>
                                <div className="tech-slide"><img src={router} alt="Router" /><p>Router</p></div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
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