import React from "react";
import contactImage from "../Images/contact-page_image.webp"

export default function Contact(){
    return(
        <section className="contact">
            <h1 className="contact__title">Get in touch</h1>
            <img src={contactImage} alt="satelite dish antenna" className="contact__image"/>
            <section className="contact__button-container">
                <a href="mailto:dylannicolet@hotmail.com"><button className="contact__button">dylannicolet@hotmail.com</button></a>
                <a href="tel:+23059611756"><button className="contact__button">(+230) 5961 17 56</button></a>
            </section>
        </section>
    )
}