import "./styles.scss"

import Memberships from "@/components/membership"
import Products from "@/components/products"
import Why from "@/components/why"
import { fisheryProducts, spicesProducts } from "@/lib/data"
import Link from "next/link"

const IndustrialProductPage = () => {
    return (
        <>
            <main id="edible-banner">
                <div className="content">
                    <h1>Fishery & ⁠Spices</h1>
                    <p>
                        Elevate your cooking with our premium Spices collection. Discover a symphony of flavors as you explore the world of culinary enchantment. Unleash the power of Spice in your kitchen today!
                    </p>
                    <div className="btns">
                        <Link href="/about-us" className="btn btn-primary">ABOUT US</Link>
                        <Link href="/contact-us" className="btn btn-secondary">CONTACT US</Link>
                    </div>
                </div>
            </main>

            <Memberships />

            <section id="fishery" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/fishery-bg.png" alt="" />
                    </div>
                    <div className="right">
                        <h2>About Fishery</h2>
                        <p>EXIM Global provides an exceptional range of fishery and seafood products, including fresh fish, shrimp, crabs, and lobsters. Our products are sourced from sustainable fisheries, ensuring that you receive only the finest quality seafood. Each item is carefully selected to meet the highest standards of freshness, taste, and safety.</p>
                        <p>Our seafood offerings cater to both domestic and international markets, serving restaurants, hotels, and individual customers. We take pride in our efficient supply chain, which guarantees timely delivery and maintains the integrity of our products. Whether for culinary use or retail, our seafood stands out for its premium quality and rich flavor.</p>
                        <p>At EXIM Global, we are committed to promoting sustainable fishing practices and delivering top-notch seafood to our clients. Our dedication to quality and sustainability makes us a trusted partner in the fishery industry. Choose EXIM Global for seafood that combines exceptional taste with responsible sourcing.trusted partner for all your digital needs. Elevate your business with expert digital services from EXIM Global.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>

            <Products data={fisheryProducts} />

            <section id="spices" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/edible-bg-1.webp" alt="" />
                    </div>
                    <div className="right">
                        <h2>About Spices</h2>
                        <p>EXIM Global offers an extensive selection of premium spices, sourced directly from the finest farms. Our range includes aromatic herbs, rich spices, and exotic blends that enhance the flavor of any dish. Each spice is carefully processed to preserve its natural essence, ensuring you receive the best quality.</p>
                        <p>Our spices cater to culinary professionals and home cooks alike, bringing vibrant flavors to kitchens around the world. From robust black pepper to fragrant cardamom, our products are known for their purity and potency. We guarantee freshness and authenticity in every package, making our spices a preferred choice for flavor enthusiasts.</p>
                        <p>At EXIM Global, we are dedicated to providing exceptional spices that meet the highest standards of quality. Our commitment to excellence ensures that our customers enjoy the true taste of each spice. Elevate your cooking with the rich and diverse flavors offered by EXIM Global.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>

            <Products data={spicesProducts} />
            <Why fullsection />
        </>
    )
}

export default IndustrialProductPage