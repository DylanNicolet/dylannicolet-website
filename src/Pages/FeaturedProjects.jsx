import React from "react"
import FeaturedCard from "../components/FeaturedCard"
import database from "../featuredProjects"

export default function FeaturedProjects(){
    let data = database.featuredProjectsData

    let featureCards = data.map((project, index) => {
        return(
            <FeaturedCard 
                key={index} 
                imageSource={project.imageSource}
                backgroundColor={project.backgroundColor}
                title={project.title}
                origin={project.origin}
                description={project.description} 
                techUsed={project.techUsed}
            />
        )
    })

    return(
        <section className="featured-projects">
            <h1 className="featured-projects__title">Featured projects</h1>
            <p className="featured-projects__text">(Hover for GitHub & live links)</p>
            <section className="featured-projects__card-container">
                {featureCards}
            </section>
        </section>
    )
}