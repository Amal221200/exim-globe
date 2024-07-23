import "./styles.scss"

import Memberships from "@/components/membership"
import Products from "@/components/products"
import Why from "@/components/why"
import { digitalServices } from "@/lib/data"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: 'Digital Services',
        description: 'Elevate your brand with effective software marketing. Our expert-backed tips guide you through the dynamic landscape of digital promotion. Explore the power of marketing to boost visibility, engagement, and conversions. Discover the key to online success with our comprehensive software strategies. Start thriving in the digital realm today!',
        openGraph: {
            title: 'Digital Services',
            description: 'Elevate your brand with effective software marketing. Our expert-backed tips guide you through the dynamic landscape of digital promotion. Explore the power of marketing to boost visibility, engagement, and conversions. Discover the key to online success with our comprehensive software strategies. Start thriving in the digital realm today!',
            ...defaultOpenGraph,
            url: `${SiteURL}/products/digital-services`
        }
    }
}

const DigitalServicesPage = () => {
    return (
        <>
            <main id="digital-services-banner" className="product-banner">
                <div className="content">
                    <h1>Digital services</h1>
                    <p>
                        Elevate your brand with effective software marketing. Our expert-backed tips guide you through the dynamic landscape of digital promotion. Explore the power of marketing to boost visibility, engagement, and conversions. Discover the key to online success with our comprehensive software strategies. Start thriving in the digital realm today!
                    </p>
                    <div className="btns">
                        <Link href="#digital" className="btn btn-primary">KNOW MORE</Link>
                        <Link href="/contact-us" className="btn btn-secondary">CONTACT US</Link>
                    </div>
                </div>
            </main>

            <Memberships />

            <section id="digital" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/digital-services-bg-2.webp" alt="" />
                    </div>
                    <div className="right">
                        <h2>Digital Services</h2>
                        <p>EXIM Global offers a wide range of digital services designed to enhance your online presence and drive business growth. Our services include web development, digital marketing, and SEO optimization, tailored to meet the unique needs of each client. With a focus on innovation and quality, we help businesses stay competitive in the digital landscape.</p>
                        <p>Our expert team works closely with you to develop effective strategies that increase visibility and engagement. From creating responsive websites to managing comprehensive marketing campaigns, we ensure that your digital presence is impactful and results-driven. Our SEO techniques further enhance your reach, bringing your business to the forefront of search engine results.</p>
                        <p>At EXIM Global, we are committed to delivering exceptional digital solutions that foster success. Our dedication to customer satisfaction and cutting-edge technology makes us a trusted partner for all your digital needs. Elevate your business with expert digital services from EXIM Global.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>

            <Products data={digitalServices} />

            <Why fullsection />
        </>
    )
}

export default DigitalServicesPage