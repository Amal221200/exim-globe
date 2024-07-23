import { Link } from "lucide-react";
import "./styles.scss";
import Memberships from "@/components/membership";
import Products from "@/components/products";
import { medicalProducts } from "@/lib/data";
import { Metadata } from "next";
import { defaultOpenGraph, SiteURL } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Medicals',
    description: 'Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.',
    openGraph: {
      title: 'Medicals',
      description: 'Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.',
      ...defaultOpenGraph,
      url: `${SiteURL}/products/medicals`
    }
  }
}

const MedicalPage = () => {
  return (
    <>
      <main id="medical-banner" className="product-banner">
        <div className="content">
          <h1>Medical Products</h1>
          <p>Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.</p>
          <div className="btns">
            <Link href="#medicals" className="btn btn-primary">KNOW MORE</Link>
            <Link href="/contact-us" className="btn btn-secondary">CONTACT US</Link>
          </div>
        </div>
      </main >

      <Memberships />
      <section id="medicals" className="white info">
        <div className="container">
          <div className="left">
            <img src="/assets/medical-bg-2.jpeg" alt="" />
          </div>
          <div className="right">
            <h2>Medical Products</h2>
            <p>EXIM Global supplies a comprehensive range of high-quality medical equipment and supplies, ensuring reliability and safety for healthcare providers. Cotton Rolls Each item is meticulously selected to meet stringent healthcare standards, providing optimal performance and patient care.</p>
            <p>Our medical products cater to hospitals, clinics, and healthcare professionals, supporting various medical procedures and patient needs. We prioritize sourcing from reputable manufacturers, guaranteeing that our supplies are both effective and dependable. our offerings enhance the efficiency and quality of healthcare services.</p>
            <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
          </div>
        </div>
      </section>

      <Products data={medicalProducts} />
    </>
  )
}

export default MedicalPage