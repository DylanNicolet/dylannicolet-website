import React from "react";

export default function ContactButtons() {
    return (
        <section className="contact__button-container">
            <a href="mailto:dylannicolet@hotmail.com"><button className="contact__button">dylannicolet@hotmail.com</button></a>
            <a href="tel:+23058187725"><button className="contact__button">(+230) 5818 77 25</button></a>
        </section>
    )
}