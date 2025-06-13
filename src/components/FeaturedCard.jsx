import React from "react";

export default function FeaturedCard(props){
    // States
    const [previewState, setPreviewState] = React.useState("inactive"); // "active", "closing", "inactive"

    let techUsed = props.techUsed.map((tech, index) => {
        return(
            <img key={index} src={`/images/tech-icon/${tech}-logo.webp`} alt={`${tech} logo`} className="featured-card__tech" />
        )
    })

    function activatePreview() {
        setPreviewState("active");
    }

    function deactivatePreview() {
        setPreviewState("closing");

        setTimeout(() => {
            setPreviewState("inactive");
        }, 300); // match CSS animation duration
    }

    function handleMouseLeave() {
        if (previewState === "active") {
            deactivatePreview();
        }
    }

    return(
        <section className="featured-card">
            <section className="featured-card__modal">
                { (props.title !== "Component library") && // Don't generate live preview for component library
                    <>
                        <button className="button-primary featured-card__button" onClick={activatePreview}>Mini preview</button>
                        <div
                            className={`featured-card__preview ${previewState === "active" ? "previewActive" : previewState === "closing" ? "previewClosing" : ""}`}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="featured-card__preview-container">
                                <button onClick={deactivatePreview} className="button__close-preview">+</button>
                                <iframe src={props.live} title="Live preview of the website"></iframe>
                            </div>
                        </div>
                    </>
                }
                <a href={props.live}  className="button-primary featured-card__external-link" target="_blank" rel="noreferrer">Live website</a>
                <a href={props.github}  className="button-primary featured-card__external-link" target="_blank" rel="noreferrer">GitHub Code </a>
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