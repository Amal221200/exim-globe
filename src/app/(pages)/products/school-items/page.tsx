import "./styles.scss"

import Memberships from "@/components/membership"
import ProductBanner from "@/components/product-banner"
import Products from "@/components/products"
import Why from "@/components/why"
import { schoolItems } from "@/lib/data"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: 'School Items',
        description: 'Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.',
        openGraph: {
            title: 'School Items',
            description: 'Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.',
            ...defaultOpenGraph,
            url: `${SiteURL}/products/school-items`
        }
    }
}

const IndustrialProductPage = () => {
    return (
        <>
            <ProductBanner title="School Items" description="Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation." knowMoreUrl="#school-items" backgroundImage="/assets/school-items-bg-1.png" />
            <Memberships />

            <section id="school-items" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/school-items-bg-1.png" alt="" />
                    </div>
                    <div className="right">
                        <h2>About Furniture</h2>
                        <p>Exim Global provides a diverse range of high-quality school furniture, designed to enhance any space with style and functionality. Each item is crafted with precision and care, ensuring durability and timeless appeal. Our products provide the perfect blend of aesthetics and practicality.</p>
                        <p>At EXIM Global, we are committed to delivering excellence in every piece of furniture we offer. Our dedication to quality, innovation, and customer satisfaction makes us a trusted partner for all your school furnishing needs. Transform your space with the exquisite furniture from EXIM Global.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>

            <Products data={schoolItems} />
            <Why fullsection />
        </>
    )
}

export default IndustrialProductPage