import profilePicture from "../Images/profile.webp"
import linkdinLogo from "../Images/linkdin-logo.png"
import githubLogo from "../Images/github-logo.png"

export default function Profile() {
    return (
        <section className="profile">
            <img src={profilePicture} alt="" className="profile__image"/>

            <section className="profile__text">
                <p>
                    <mark className="mark-p">{"<p>"}</mark>
                    Hi! Welcome to the web factory.
                    I am your friendly neighbourhood Front-End Web Developer,
                    Currently coding from the warm tropical island of Mauritius.
                    <br />
                    <br /> 
                    This website will provide you with examples of my work and <mark>{"<a>"}</mark><a href="https://github.com/DylanNicolet" rel="noreferrer" target="_blank">links</a><mark>{"</a>"}</mark> to my code hosted on GitHub.
                    <br /> 
                    <br /> 
                    So don't hesitate to visite them. Enjoy! 
                    <br />
                    <mark className="mark-p">{"</p>"}</mark>
                </p>
            </section>

            <section className="profile__logo-container">
                <a href="https://github.com/DylanNicolet" rel="noreferrer" target="_blank">
                    <img src={githubLogo} alt="Link to GitHub" className="profile__logo"/>
                </a>
                <a href="https://www.linkedin.com/in/dylan-nicolet-reactwebdeveloper/" rel="noreferrer" target="_blank">
                    <img src={linkdinLogo} alt="Link to Linkdin" className="profile__logo" style={{width: "50px"}}/>
                </a>
            </section>
        </section>
    )
}