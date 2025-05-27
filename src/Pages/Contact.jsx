import contactImage from "../assets/images/contact-page_image.webp"
import ContactButtons from "../components/ContactButtons";

export default function Contact(){
    return(
        <section className="contact">
            <h1 className="contact__title">Get in touch</h1>
            <img src={contactImage} alt="satelite dish antenna" className="contact__image"/>
            <ContactButtons />
        </section>
    )
}