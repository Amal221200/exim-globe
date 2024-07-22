import "./styles.scss"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import { howWeWorkSteps, whyChooseData } from "@/lib/data"
import Accordion from "@/components/accordion"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Sourcing Agent',
    description: 'At every step, our focus remains on efficiency, cost-effectiveness, and client satisfaction. Trust us as your sourcing partner, committed to delivering exceptional service and meeting your sourcing needs with precision.',
    openGraph: {
      title: 'Sourcing Agent',
      description: 'At every step, our focus remains on efficiency, cost-effectiveness, and client satisfaction. Trust us as your sourcing partner, committed to delivering exceptional service and meeting your sourcing needs with precision.',
      ...defaultOpenGraph,
      url: `${SiteURL}/sourcing-agent`
    }
  }
}

const SourcingAgentPage = () => {
  return (
    <>
      <main id="sourcing-agent-banner">
        <div className="content">
          <h1>SOURCING AGENT</h1>
          <p>
            At every step, our focus remains on efficiency, cost-effectiveness, and client satisfaction. Trust us as your sourcing partner, committed to delivering exceptional service and meeting your sourcing needs with precision.
          </p>
          <a href="#work-with-us" className="btn btn-white">WORK WITH US</a>
        </div>
      </main>

      <section id="how-we-work">
        <h2 className="section-heading">How We Work: Your Trusted Sourcing Agent</h2>
        <p>As a dedicated sourcing agent, our role is to seamlessly fulfill the diverse requirements of our buyers while ensuring timely delivery. Here’s an overview of the tasks we expertly manage:</p>

        <div className="container">
          {
            howWeWorkSteps.map(({ text, title, Icon }, key) => (
              <div className="box" key={key}>
                <span className="icon"><Icon color="#fff" /></span>
                <h3>{title}</h3>
                <p>
                  {text}
                </p>
              </div>
            ))
          }
        </div>
      </section>


      <section id="benefit-section">
        <h2 className="section-heading">What Is Your Benefit With Our Sourcing Agent?</h2>
        <p>Choosing our sourcing agent services ensures a host of benefits tailored to meet your unique business needs:</p>
        <div className="container">
          <div className="left">
            <img src="/assets/Ravindra-SB.webp" alt="" />
          </div>
          <div className="right">
            <div className="accordion-container">
              {
                whyChooseData.map((whyChoose) => (
                  <Accordion text={whyChoose.text} label={whyChoose.label} key={whyChoose.label} />
                ))
              }
            </div>
            <p>Partnering with us means more than just sourcing; it’s about empowering your business with efficiency, reliability, and a commitment to delivering exceptional value.</p>
            <Link href="/contact-us" className="btn btn-primary">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <section id="why-choose">
        <h2 className="section-heading">Why Choose Our Sourcing Agent Services?</h2>
        <div className="container">

          <ol className="why-choose-list">
            {
              whyChooseData.map((whyChoose, key) => (
                <li className="why-choose-list-item" key={key}>
                  <strong>{whyChoose.label}</strong>: {whyChoose.text}
                </li>
              ))
            }
          </ol>
          <p>
            In a competitive global market, having a reliable and efficient Sourcing Agent is a strategic advantage. Our services are designed to empower businesses, providing them with the expertise and support needed to navigate the complexities of international sourcing successfully. Partner with us for a sourcing journey that prioritizes transparency, efficiency, and your overall satisfaction.
          </p>
        </div>
      </section>


      <ContactForm />
    </>
  )
}

export default SourcingAgentPage