import "./styles.scss"
import { Metadata } from "next"
import Exports from "@/components/exports"
import Testimonials from "@/components/testimonials"
import Why from "@/components/why"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"
import Memberships from "@/components/membership"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: {
      template: "%s - Our Products",
      default: 'Our Products'
    },
    description: 'Export quality products, elevate possibilities, redefine excellence – unleashing the pinnacle of quality and innovation.',
    openGraph: {
      title: 'Our Products',
      description: 'Export quality products, elevate possibilities, redefine excellence – unleashing the pinnacle of quality and innovation.',
      ...defaultOpenGraph,
      url: `${SiteURL}/products`
    }
  }
}

const ProductsPage = () => {
  return (
    <>
      <main id="products-banner">
        <div className="content">
          <h1>EXPORT QUALITY PRODUCTS</h1>
          <p>Elevate Possibilities, Redefine Excellence – Unleashing the Pinnacle of Quality and Innovation.</p>

          <div className="btns">
            <Link href="#exports" className="btn btn-primary">KNOW MORE</Link>
            <Link href="/contact-us" className="btn btn-secondary">CONTACT US</Link>
          </div>
        </div>
      </main>

      <Memberships />
      
      <Exports />

      <Why fullsection />

      <Testimonials />
    </>
  )
}

export default ProductsPage