import React from "react";

export default function FeaturedCard(props){
    let techUsed = props.techUsed.map((tech, index) => {
        return(
            <img src={tech} alt="tech logo"  key={index} className="featured-card__tech" />
        )
    })

    return(
        <section className="featured-card">
            <section className="featured-card__modal">
                <a href={props.github} target="_blank" rel="noreferrer"><button className="button-primary">GitHub Code</button> </a>
                <a href={props.live}  target="_blank" rel="noreferrer"><button className="button-primary">Live preview</button></a> 
            </section>

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