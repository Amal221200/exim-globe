import { AwardIcon, BuildingIcon, DollarSignIcon, HousePlusIcon, LandmarkIcon, NetworkIcon, UsersIcon } from "lucide-react"
import "./styles.scss"
import Founders from "@/components/founders"
import Why from "@/components/why"
import ContactForm from "@/components/contact-form"
import { Metadata } from "next"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import Memberships from "@/components/membership"

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

      <Memberships />
      
      <section id="about-section">
        <div className="container">
          <div className="left">
            <h2 className="section-heading">About Us</h2>
            <h3 className="section-heading">We Are Leading International Company In The World</h3>
            <p>
              Discover excellence with EXIM Global, a leading Merchant Exporter and an esteemed brand within Digital Gravity Technologies. Since our inception in 2022, based in Pune, Maharashtra, India, we’ve set the benchmark for international trade with our commitment to quality, integrity, and professionalism.
            </p>

            <p>
              At EXIM Global, we specialize in the export of a diverse range of high-quality products, including fresh fruits, aromatic spices, exquisite handicrafts, and more. Our mission, encapsulated in our motto “Exporting Excellence,” is to deliver superior products and seamless services to clients across the globe.
              Certified by esteemed organizations such as GST, APEDA, and FIEO, we adhere to the highest standards of quality and compliance. Our robust network and extensive industry expertise enable us to source top-tier products from various cities throughout India, ensuring that every export meets rigorous standards.
            </p>

            <p>
              More than just a facilitator of international trade, EXIM Global catalyzes business growth. We offer a comprehensive suite of services, including import solutions, expert sourcing, and valuable training and consultancy. Our goal is to empower businesses and drive success in the global market.
              Choose EXIM Global as your trusted partner in international trade. With every transaction, we demonstrate our dedication to excellence and our commitment to fostering a more connected and prosperous global trade landscape.
            </p>

            <a href="/products" className="btn btn-primary">OUR PRODUCTS</a>
          </div>
          <div className="right">
            <h3><span className="icon"><BuildingIcon /></span> Mission</h3>
            <p>
              Our mission at EXIM Global is to redefine global trade by fostering excellence, innovation, and sustainability. We aim to be the catalyst for businesses, connecting the world through seamless and ethical international transactions.
            </p>

            <h3><span className="icon"><LandmarkIcon /></span> Vision</h3>
            <p>
              At EXIM Global, our vision is to shape a future where international trade is a harmonious blend of
              innovation, ethical practices, and global connectivity. We aspire to be the forefront of progressive
              and
              sustainable global commerce.
            </p>

            <h3><span className="icon"><HousePlusIcon /></span> Values</h3>
            <p>
              At EXIM Global, our values form the cornerstone of our commitment to 'Exporting Excellence.'
              Integrity,
              innovation, and client-centricity drive us to navigate the complexities of global trade, ensuring
              trust,
              quality, and success in every transaction.
            </p>
            <img src="/assets/home-about-bg.png" alt="" />
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