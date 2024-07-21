import { FacebookIcon, ImagesIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import "./styles.scss"
import { socialLinks } from "@/lib/constants"

const ContactForm = () => {
    return (
        <section id="contact-us">
            <div className="container">
                <div className="left">
                    <h2 className="section-heading">Request a Quote</h2>
                    <p>Ready to Work Together? Build a project with us!</p>
                    <form action="">
                        <label htmlFor="">Your Full Name</label><br />
                        <input type="text" id="" /> <br />
                        <label htmlFor="">Company Name</label><br />
                        <input type="text" id="" /> <br />
                        <label htmlFor="">Mobile No:</label><br />
                        <input type="text" id="" /> <br />
                        <label htmlFor="">Email Id</label><br />
                        <input type="text" id="" /> <br />

                        <button type="submit" className="btn btn-primary">
                            SUBMIT
                        </button>
                    </form>
                </div>
                <div className="right">
                    <h2 className="section-heading">Contact Info</h2>
                    <div>
                        <h4><MapPinIcon /> <span>Address</span></h4>
                        <p>Office No. 101, Avdhut Complex, Dattanagar Rd, Ambegaon Bk, Pune 411046, Maharashtra, India.</p>
                    </div>
                    <div>
                        <h4><MailIcon /> <span>Email</span></h4>
                        <p>contact@eximelite.com</p>
                    </div>
                    <div>
                        <h4><PhoneIcon /> <span>Call Us</span></h4>
                        <p>+91- 98 544 32222</p>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            {
                                socialLinks.map(({ Icon, url }, key) => (
                                    <a href={url} target="_blank" key={key}>
                                        <Icon />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <iframe className="map" loading="lazy"
                        src="https://maps.google.com/maps?q=digital%20gravity%20technologies&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                        title="digital gravity technologies" aria-label="digital gravity technologies"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactForm