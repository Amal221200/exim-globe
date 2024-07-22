import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import "./styles.scss"

const ContactForm = () => {
    return (
        <section id="contact-us">
            <div className="container">
                <div className="left">
                    <form action="">
                        <h2 className="section-heading">Request a Quote</h2>
                        <p>Ready to Work Together? Build a project with us!</p>
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
                        <p>Sai Dham, A11, Akurdi Pradhikaran Road, PCNTDA, Pune – 411044, Maharashtra INDIA</p>
                    </div>
                    <div>
                        <h4><MailIcon /> <span>Email</span></h4>
                        <p>sales@eximglobal-net.preview-domain.com <br />
                            marketing.eximglobal@gmail.com</p>
                    </div>
                    <div>
                        <h4><PhoneIcon /> <span>Call Us</span></h4>
                        <p>+91 86003 16457 <br />
                            +91 95271 06880</p>
                    </div>
                    <iframe className="map" loading="lazy"
                        src="https://maps.google.com/maps?q=18.652089%2C%2073.764534&z=12&hl=en&t=m&output=embed&iwloc=near"
                        title="digital gravity technologies" aria-label="digital gravity technologies" />
                </div>
            </div>
        </section>
    )
}

export default ContactForm