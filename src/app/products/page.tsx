import { Metadata } from "next"
import Exports from "../../components/exports"
import Testimonials from "../../components/testimonials"
import Why from "../../components/why"
import "./styles.scss"
import { defaultOpenGraph, SiteURL } from "@/lib/metadata"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Our Products',
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
                <a href="" className="btn btn-primary">KNOW MORE</a>
                <a href="" className="btn btn-secondary">CONTACT US</a>
            </div>
        </div>
    </main>

    <Exports />

    <Why fullsection />

    <Testimonials />
    </>
  )
}

export default ProductsPage