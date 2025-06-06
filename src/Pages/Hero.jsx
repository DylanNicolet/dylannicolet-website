import React from "react"
import ContactButtons from "../components/ContactButtons"

export default function Hero(){
    const techsUsed = ['git', 'html', 'css', 'sass', 'js', 'react', 'redux', 'zustand', 'router']

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
            <header>
                <section className="hero__title-container">
                    <p>{"<"}</p>
                    <h1 className="hero__title">Dylan Nicolet</h1>
                    <p>{" />"}</p>
                </section>
                <ContactButtons />
            </header>

            <p className="hero__text" id="hero__text">
                Front-end development, done thoughtfully.
            </p>
            
            <section className="hero__tech-icon-container">
                <div className="tech-ticker">
                    <div className="tech-track">
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                {techsUsed.map((tech, index) => (
                                    <div key={tech + index} className="tech-slide">
                                        <img src={`/images/tech-icon/${tech}-logo.webp`} alt={tech} />
                                        <p>{tech}</p>
                                    </div>
                                ))}
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