import Exports from "../../components/exports"
import Testimonials from "../../components/testimonials"
import Why from "../../components/why"
import "./styles.scss"

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