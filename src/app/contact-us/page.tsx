import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import "./styles.scss"
import Why from "../../components/why"
import Link from "next/link"
import { socialLinks } from "@/lib/constants"
import { Metadata } from "next"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Contact Us',
    description: 'Welcome to Exim Globe, your gateway to seamless global trade solutions. We value your inquiries and are eager to assist you in every aspect of your business. Contact us today to explore the world of possibilities in exports, imports, expert sourcing, and more.',
    openGraph: {
      title: 'Contact Us',
      description: 'Welcome to Exim Globe, your gateway to seamless global trade solutions. We value your inquiries and are eager to assist you in every aspect of your business. Contact us today to explore the world of possibilities in exports, imports, expert sourcing, and more.',
      ...defaultOpenGraph,
      url: `${SiteURL}/contact-us`
    }
  }
}

const ContactUsPage = () => {
  return (
    <>
      <main id="contact-banner">
        <div className="content">
          <h1>
            CONTACT US
          </h1>
        </div>
      </main>
      <section id="contact-section" className="full-section">
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
          <div className="middle">
            <h2 className="section-heading">India Branch</h2>
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
              <p>+91 98544 32222</p>
            </div>
            <iframe className="map" loading="lazy"
              src="https://maps.google.com/maps?q=digital%20gravity%20technologies&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
              title="digital gravity technologies" aria-label="digital gravity technologies" />
          </div>
          <div className="right">
            <h2 className="section-heading">Canada Branch</h2>
            <div>
              <h4><MapPinIcon /> <span>Address</span></h4>
              <p>9 Trailwood Place, 1, Halifax, Nova Scotia, Canada.</p>
            </div>
            <div>
              <h4><MailIcon /> <span>Email</span></h4>
              <p>canada.contact@eximelite.com</p>
            </div>
            <div>
              <h4><PhoneIcon /> <span>Call Us</span></h4>
              <p>+1 9026944217</p>
            </div>
            <iframe className="map" loading="lazy"
              src="https://maps.google.com/maps?q=digital%20gravity%20technologies&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
              title="digital gravity technologies" aria-label="digital gravity technologies"></iframe>
          </div>
        </div>
      </section>

      <Why fullsection />

      <section id="message" className="full-section">
        <div className="container">
          <div className="left">
            <img src="/assets/contact-bg-1.webp" alt="" />
          </div>
          <div className="right">
            <Link href="/products" className="btn btn-primary">OUR PRODUCTS</Link>

            <p>Welcome to Exim Globe, your gateway to seamless global trade solutions. We value your inquiries and are eager to assist you in every aspect of your business. Contact us today to explore the world of possibilities in exports, imports, expert sourcing, and more.</p>

            <p>At Exim Globe, we understand the importance of effective communication. That’s why our dedicated team is ready to address your queries, provide information, and guide you through the intricacies of international trade. Whether you are looking to source premium products, enhance your export capabilities, or seek expert advice, our ‘Contact Us’ page is your direct link to our knowledgeable professionals.</p>

            <p>Feel free to drop us a message, and our responsive team will ensure a prompt and tailored response to meet your specific needs. Your success is our priority, and we are committed to delivering top-notch services that elevate your global trade experience.</p>
          </div>
        </div>
      </section>
      <div className="social-links">
        {
          socialLinks.map(({ Icon, url, color }, key) => (
            <a href={url} target="_blank" key={key} style={{ background: color }}>
              <Icon size={20} />
            </a>
          ))
        }
      </div>
    </>
  )
}

export default ContactUsPage