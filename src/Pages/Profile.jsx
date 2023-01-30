import React from "react";
import profilePicture from "../Images/profile.webp"

export default function Profile(){

    /*
    const myRef = React.useRef()
    const [elementVisible, setElementVisible] = React.useState()
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setElementVisible(entry.isIntersecting)
            console.log(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
    <img src={profilePicture} alt="" className={`${"profile__image"} ${elementVisible ? "entrance-animation" : ""}`} ref={myRef}/>
    */

    return(
        <section className="profile">
            <img src={profilePicture} alt="" className="profile__image"/>

            <section className="profile__text">
                <p><mark>{"<p>"}</mark><br /> Hi! Welcome to the web factory.
                I am your friendly neighbourhood Front-End Web Developer,
                Currently coding from the warm tropical island of Mauritius. <br />
                <br /> This website will provide you with examples of my work and <mark>{"<a>"}</mark><a href="https://github.com/DylanNicolet" rel="noreferrer" target="_blank">links</a><mark>{"</a>"}</mark> to my code hosted on GitHub.
                <br />  So don't hesitate to visite them. Enjoy! <br />
                <mark>{"</p>"}</mark></p>
            </section>
        </section>
    )
}