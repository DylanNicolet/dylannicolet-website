import React from "react";

export default function FeaturedCard(props){
    let techUsed = props.techUsed.map((tech, index) => {
        return(
            <img src={tech} alt="tech logo"  key={index} className="featured-card__tech" />
        )
    })

    return(
        <section className="featured-card">
            <img src={props.imageSource} alt="thumbnail preview of the website"  className="featured-card__image"/>
            <h1 className="featured-card__title">{props.title}</h1>
            <p className="featured-card__origin">{props.origin}</p>
            <p className="featured-card__description">{props.description}</p>
            <section className="featured-card__tech-container">
                {techUsed}
            </section>
        </section>
    )
}