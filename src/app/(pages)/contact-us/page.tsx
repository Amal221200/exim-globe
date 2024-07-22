import "./styles.scss"
import Why from "@/components/why"
import Link from "next/link"
import { Metadata } from "next"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import ContactForm from "@/components/contact-form"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Contact Us',
    description: 'Welcome to EXIM Global, your gateway to seamless global trade solutions. We value your inquiries and are eager to assist you in every aspect of your business. Contact us today to explore the world of possibilities in exports, imports, expert sourcing, and more.',
    openGraph: {
      title: 'Contact Us',
      description: 'Welcome to EXIM Global, your gateway to seamless global trade solutions. We value your inquiries and are eager to assist you in every aspect of your business. Contact us today to explore the world of possibilities in exports, imports, expert sourcing, and more.',
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
      
      <ContactForm />

      <Why fullsection />

      <section id="message" className="full-section">
        <div className="container">
          <div className="left">
            <img src="/assets/contact-bg.jpeg" alt="" />
          </div>
          <div className="right">
            <Link href="/products" className="btn btn-primary">OUR PRODUCTS</Link>

            <p>Welcome to EXIM Global, your gateway to seamless global trade solutions. We value your inquiries and are eager to assist you in every aspect of your business. Contact us today to explore the world of possibilities in exports, imports, expert sourcing, and more.</p>

            <p>At EXIM Global, we understand the importance of effective communication. That’s why our dedicated team is ready to address your queries, provide information, and guide you through the intricacies of international trade. Whether you are looking to source premium products, enhance your export capabilities, or seek expert advice, our ‘Contact Us’ page is your direct link to our knowledgeable professionals.</p>

            <p>Feel free to drop us a message, and our responsive team will ensure a prompt and tailored response to meet your specific needs. Your success is our priority, and we are committed to delivering top-notch services that elevate your global trade experience.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUsPage