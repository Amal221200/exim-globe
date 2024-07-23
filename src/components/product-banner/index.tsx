import "./style.scss"
import Link from 'next/link'


const ProductBanner = ({ backgroundImage, title, description, knowMoreUrl }: { backgroundImage: string, title: string, description: string, knowMoreUrl: string }) => {
    return (
        <main className="product-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="content">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="btns">
                    <Link href={knowMoreUrl} className="btn btn-primary">KNOW MORE</Link>
                    <Link href="/contact-us" className="btn btn-secondary">CONTACT US</Link>
                </div>
            </div>
        </main>
    )
}

export default ProductBanner