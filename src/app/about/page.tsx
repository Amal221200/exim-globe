import { AwardIcon, BuildingIcon, DollarSignIcon, HousePlusIcon, LandmarkIcon, NetworkIcon, UsersIcon } from "lucide-react"
import "./styles.scss"
import Founders from "../../components/founders"
import Why from "../../components/why"
import ContactForm from "../../components/contact-form"
import { Metadata } from "next"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'About Us',
    description: 'Welcome to EXIM Global, a distinguished brand of Digital Gravity Technologies and a leader in international trade.',
    openGraph: {
      title: 'About Us',
      description: 'Welcome to EXIM Global, a distinguished brand of Digital Gravity Technologies and a leader in international trade.',
      ...defaultOpenGraph,
      url: `${SiteURL}/about`
    }
  }
}

const AboutPage = () => {
  return (
    <>
      <main id="about-banner">
        <h1>ABOUT US</h1>
      </main>
      <section id="about-section">
        <div className="container">
          <div className="left">
            <h2 className="section-heading">About Us</h2>
            <h3 className="section-heading">We Are Leading International Company In The World</h3>
            <p>
              Welcome to Exim Global, a distinguished brand of Digital Gravity Technologies and a leader in
              international trade. Established in 2017, Exim Global has emerged as a trusted Merchant Exporter in
              India, embodying the ethos of ‘Exporting Excellence.’
            </p>

            <p>
              Operating from Pune, Maharashtra, India, we specialize in a diverse range of products, including
              fruits,
              spices, handicrafts, and more. As a committed player in the export-import industry, our mission is
              to
              redefine global trade by fostering excellence, innovation, and sustainability.
            </p>

            <p>
              Certified by prestigious organizations such as GST, APEDA, FIEO, and others, Exim Global ensures that
              every export meets the highest standards of quality and compliance. As a brand under Digital Gravity
              Technologies, we leverage advanced technologies and industry expertise to deliver seamless and
              ethical
              international transactions.
            </p>

            <p>
              Exim Global is not merely a Merchant Exporter; it’s a catalyst for business growth. Our comprehensive
              services extend beyond traditional exports to import solutions, expert sourcing, and valuable
              training
              and consultancy. We pride ourselves on being at the forefront of progressive and sustainable global
              commerce.
            </p>

            <p>
              Choose Exim Global for a partner dedicated to integrity, innovation, and client-centricity. Our
              values
              drive us to navigate the complexities of global trade, ensuring trust, quality, and success in every
              transaction. Experience the future of international trade with Exim Global – where every export tells
              a
              story of excellence.
            </p>

            <a href="/products" className="btn btn-primary">OUR PRODUCTS</a>
          </div>
          <div className="right">
            <h3><span className="icon"><BuildingIcon /></span> Mission</h3>
            <p>
              Our mission at Exim Global is to redefine global trade by fostering excellence, innovation, and
              sustainability. We aim to be the catalyst for businesses, connecting the world through seamless and
              ethical international transactions.
            </p>

            <h3><span className="icon"><LandmarkIcon /></span> Vision</h3>
            <p>
              At Exim Global, our vision is to shape a future where international trade is a harmonious blend of
              innovation, ethical practices, and global connectivity. We aspire to be the forefront of progressive
              and
              sustainable global commerce.
            </p>

            <h3><span className="icon"><HousePlusIcon /></span> Values</h3>
            <p>
              At Exim Global, our values form the cornerstone of our commitment to 'Exporting Excellence.'
              Integrity,
              innovation, and client-centricity drive us to navigate the complexities of global trade, ensuring
              trust,
              quality, and success in every transaction.
            </p>
            <img src="/assets/about-home.webp" alt="" />
          </div>
        </div>
      </section>

      <section id="achievements" className="full-section">
        <div className="container">
          <div className="box">
            <span className="icon"><DollarSignIcon /></span>
            <div>
              <h5>300+</h5>
              <p>Deals in 300+ export quality products</p>
            </div>
          </div>

          <div className="box">
            <span className="icon"><UsersIcon /></span>
            <div>
              <h5>522+</h5>
              <p>Successfully Project Finished.</p>
            </div>
          </div>

          <div className="box">
            <span className="icon"><NetworkIcon /></span>
            <div>
              <h5>100+</h5>
              <p>Colleagues & counting more daily</p>
            </div>
          </div>

          <div className="box">
            <span className="icon"><AwardIcon /></span>
            <div>
              <h5>10+</h5>
              <p>Years of experience with proud</p>
            </div>
          </div>
        </div>
      </section>

      <Founders headingBackground />
      <Why />
      <ContactForm />
    </>
  )
}

export default AboutPage