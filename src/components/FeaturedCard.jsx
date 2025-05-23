import React from "react";

export default function FeaturedCard(props){
    // States
    let [previewActive, setPreviewActive] = React.useState(false)

    let techUsed = props.techUsed.map((tech, index) => {
        return(
            <img key={index} src={`/images/${tech}-logo.png`} alt={`${tech} logo`} className="featured-card__tech" />
        )
    })

    function activatePreview() {
        setPreviewActive(true)
    }

    function deactivatePreview() {
        setPreviewActive(false)
    }

    // Close the preview when the mouse leaves the popup
    function handleMouseLeave() {
        if (previewActive) {
          deactivatePreview();
        }
    }

    return(
        <section className="featured-card">
            <section className="featured-card__modal">
                { (props.title !== "Component library") && // Don't generate live preview for component library
                    <button className="button-primary" onClick={activatePreview}>Mini preview</button>
                }
                <a href={props.live}  target="_blank" rel="noreferrer"><button className="button-primary">Live website</button></a>
                <a href={props.github} target="_blank" rel="noreferrer"><button className="button-primary">GitHub Code</button> </a>

                { previewActive &&
                    <div className="featured-card__preview" onMouseLeave={handleMouseLeave}>
                        <div className="featured-card__preview-container">
                            <button onClick={deactivatePreview} className="button__close-preview">+</button>
                            <iframe src={props.live} title="Live preview of the website"></iframe>
                        </div>
                    </div>
                }
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