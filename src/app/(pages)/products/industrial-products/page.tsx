import "./styles.scss"
import Memberships from "@/components/membership"
import Products from "@/components/products"
import Why from "@/components/why"
import { hdpeDrums, safetyItems } from "@/lib/data"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: 'Industrial Products',
        description: 'Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.',
        openGraph: {
            title: 'Industrial Products',
            description: 'Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.',
            ...defaultOpenGraph,
            url: `${SiteURL}/products/industrial-products`
        }
    }
}

const IndustrialProductPage = () => {
    return (
        <>
            <main id="industrial-products-banner" className="product-banner">
                <div className="content">
                    <h1>Industral Products</h1>
                    <p>Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.</p>
                    <div className="btns">
                        <Link href="#hdpe-drums" className="btn btn-primary">KNOW MORE</Link>
                        <Link href="/contact-us" className="btn btn-secondary">CONTACT US</Link>
                    </div>
                </div>
            </main>

            <Memberships />

            <section id="hdpe-drums" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/hdpe-drums-bg.webp" alt="" />
                    </div>
                    <div className="right">
                        <h2>HDPE Drums / Barrels</h2>
                        <p>EXIM Global specializes in providing high-quality HDPE drums and barrels, designed for the safe and efficient storage and transportation of liquids and chemicals. Our HDPE drums are made from high-density polyethylene, ensuring they are durable, resistant to impact and capable of withstanding various environmental conditions. These features make them ideal for a wide range of industries, including pharmaceuticals, chemicals, and food processing.</p>
                        <p>Our HDPE barrels come in various sizes and capacities to meet diverse storage needs. Each drum is designed with secure, leak-proof lids to prevent spillage and contamination, ensuring the integrity of the stored contents. Additionally, the lightweight nature of HDPE makes handling and transportation easier, reducing the risk of workplace injuries and improving overall efficiency.</p>
                        <p>At EXIM Global, we prioritize quality and safety, adhering to international standards in our manufacturing processes. Our commitment to excellence ensures that our customers receive reliable, high-performing products that meet their specific requirements. Trust EXIM Global for all your HDPE drum and barrel needs, and experience the benefits of superior storage solutions.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>

            <Products data={hdpeDrums} heading="Available Products" />

            <section id="safety-items" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/industrial-safety-items.jpg" alt="" />
                    </div>
                    <div className="right">
                        <h2>Industrial Safety Items</h2>
                        <p>EXIM Global offers an extensive range of industrial safety items designed to protect workers in various hazardous environments. Our selection includes high-quality helmets, gloves, protective clothing, and safety goggles. Each product is crafted to meet rigorous safety standards, ensuring maximum protection and durability.
                        </p>
                        <p>Our safety gear is essential for industries such as construction, manufacturing, and chemical processing. We understand the importance of reliable protective equipment in preventing workplace accidents and injuries. Therefore, we source only the best materials to provide our clients with top-notch safety solutions.</p>
                        <p>At EXIM Global, we prioritize the well-being of workers by continuously innovating and improving our product range. Our commitment to safety and quality makes us a trusted partner for businesses worldwide. Choose EXIM Global for reliable and effective industrial safety items that enhance workplace safety.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>
            <Products data={safetyItems} heading="Available Products" />

            <Why fullsection />
        </>
    )
}

export default IndustrialProductPage