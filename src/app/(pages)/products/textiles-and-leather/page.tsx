import "./styles.scss"
import Memberships from "@/components/membership"
import ProductBanner from "@/components/product-banner"
import Products from "@/components/products"
import Why from "@/components/why"
import { bedsheetProducts, cottonProducts, jeansProducts, leatherProducts, towelProducts } from "@/lib/data"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: 'Textiles & Leather',
        description: 'Discover the latest in vogue with our exclusive line of Garments. From timeless classics to avant-garde designs, our collection promises to redefine your wardrobe. Explore the epitome of style and comfort. & Explore our exquisite range of leather products, where sophistication meets endurance. Discover timeless elegance with our handcrafted leather goods that promise unmatched durability.',
        openGraph: {
            title: 'Textiles & Leather',
            description: 'Discover the latest in vogue with our exclusive line of Garments. From timeless classics to avant-garde designs, our collection promises to redefine your wardrobe. Explore the epitome of style and comfort. & Explore our exquisite range of leather products, where sophistication meets endurance. Discover timeless elegance with our handcrafted leather goods that promise unmatched durability.',
            ...defaultOpenGraph,
            url: `${SiteURL}/products/textiles-and-leather`
        }
    }
}

const TextilesAndLeatherPage = () => {
    return (
        <>
          <ProductBanner title="Textiles & Leather" description="Discover the latest in vogue with our exclusive line of Garments. From timeless classics to avant-garde designs, our collection promises to redefine your wardrobe. Explore the epitome of style and comfort. & Explore our exquisite range of leather products, where sophistication meets endurance. Discover timeless elegance with our handcrafted leather goods that promise unmatched durability." knowMoreUrl="#textiles" backgroundImage="/assets/textiles-and-leather-bg.webp" />

            <Memberships />

            <section id="textiles" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/textiles-bg.png" alt="" />
                    </div>
                    <div className="right">
                        <h2>About Textile</h2>
                        <p>EXIM Global offers a wide array of high-quality textile products to meet diverse needs. Our collection includes premium fabrics, stylish garments, and elegant home textiles. Each product is meticulously crafted to ensure durability, vibrant colors, and intricate designs, reflecting our commitment to quality.</p>
                        <p>Our textiles cater to various sectors, including fashion, home décor, and industrial applications. We source our materials from trusted suppliers, ensuring that our products meet international standards. Whether you need luxurious fabrics for a fashion line or durable textiles for home furnishings, we have the perfect solutions.</p>
                        <p>At EXIM Global, we pride ourselves on providing exceptional textile products and outstanding customer service. Our team is dedicated to helping you find the right textiles to match your specific requirements. Trust us to deliver quality, reliability, and innovation in every textile product we offer.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>

            <Products data={bedsheetProducts} heading="Bedsheet Products" />
            <Products data={towelProducts} heading="Towel Products" />
            <Products data={jeansProducts} heading="Variety of Jeans" />
            <Products data={cottonProducts} heading="Cotton Products" />

            <section id="leather" className="white info">
                <div className="container">
                    <div className="left">
                        <img src="/assets/home-exports/Leather-Products.webp" alt="" />
                    </div>
                    <div className="right">
                        <h2>About Leather</h2>
                        <p>EXIM Global specializes in premium leather products, offering a diverse range of handbags, belts, shoes, and jackets. Each item is expertly crafted from high-quality leather, ensuring durability, elegance, and timeless style. Our commitment to excellence ensures that every product not only meets but exceeds customer expectations.</p>
                        <p>Our leather products cater to a global market, blending traditional craftsmanship with modern design. We source the finest materials to create items that stand out for their quality and attention to detail. Whether you are looking for stylish accessories or robust footwear, our leather goods offer unparalleled sophistication and resilience.</p>
                        <p>At EXIM Global, we take pride in our heritage of leather craftsmanship. Our dedication to quality and customer satisfaction makes us a preferred choice for discerning clients worldwide. Experience the luxury and reliability of our leather products and elevate your style with EXIM Global.</p>
                        <Link href="/contact-us" className="btn btn-primary">CONTACT US</Link>
                    </div>
                </div>
            </section>

            <Products data={leatherProducts} heading="Leather Products" />

            <Why fullsection />
        </>
    )
}

export default TextilesAndLeatherPage