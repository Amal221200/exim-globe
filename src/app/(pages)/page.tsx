import "./home.scss"
import Exports from "@/components/exports"
import Why from "@/components/why"
import Founders from "@/components/founders"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Link from "next/link"
import Memberships from "@/components/membership"

const HomePage = () => {
    return (
        <>
            <main id="home">
                <div className="content">
                    <h1>EXIM Global</h1>
                    <h2>
                        PREMIER <br />
                        MERCHANT <br />
                        EXPORTER IN INDIA
                    </h2>
                    <p>
                        We are the trusted Merchant Exporter in India, excels in global trade, ensuring seamless exports of
                        diverse
                        products. Exporting excellence is our commitment, setting us apart in the industry
                    </p>
                    <div className="btns">
                        <a href="/products" className="btn btn-primary">OUR PRODUCTS</a>
                        <a href="/contact-us" className="btn btn-secondary">CONTACT US</a>
                    </div>
                </div>
            </main>

            {/* <!-- achievements --> */}
            <section id="home-achievements">
                <div className="container">
                    <div className="left">
                        <h2>Our Export Commitment</h2>
                        <h3>
                            20+ Yrs Of Success as <br /> Merchant Exporter in India <br />
                        </h3>
                        <p>
                            Embark on an export journey with Exim Global – A renowned Merchant Exporter in India, offering
                            seamless exports, import solutions, expert sourcing, and invaluable training and consultancy.
                        </p>
                        <Link href="/contact-us" className="btn btn-dark">WORK WITH US</Link>
                    </div>
                    <div className="right">
                        <div className="box">
                            <div>
                                <h2>200+</h2>
                                <p>Successfully Project <br />Finished.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h2>20+</h2>
                                <p>Years of experience <br />with proud</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h2>150+</h2>
                                <p>Deals in 150+ export <br />quality products</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h2>100+</h2>
                                <p>Colleagues & counting <br />more daily</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- member section --> */}

            <Memberships />

            {/* <!-- about section --> */}

            <section id="about" className="white">
                <div className="container">
                    <div className="left">
                        <h2>About Exim Global</h2>
                        <p>
                            Discover excellence with EXIM Global, a Manufacturer and Merchant Exporter and an esteemed brand within Digital Gravity Technologies. Since our inception in 2022, based in Pune, Maharashtra, India, we’ve set the benchmark for international trade with our commitment to quality, integrity, and professionalism.
                        </p>
                        <p>
                            At EXIM Global, we specialize in the export of a diverse range of high-quality products, including fresh fruits, aromatic spices, exquisite handicrafts, and more. Our mission, encapsulated in our motto “Exporting Excellence,” is to deliver superior products and seamless services to clients across the globe.

                        </p>
                        <p>
                            Certified by esteemed organizations such as GST, APEDA, and FIEO, we adhere to the highest standards of quality and compliance. Our robust network and extensive industry expertise enable us to source top-tier products from various cities throughout India, ensuring that every export meets rigorous standards.

                        </p>
                        <p>
                            More than just a facilitator of international trade, EXIM Global catalyzes business growth. We offer a comprehensive suite of services, including import solutions, expert sourcing, and valuable training and consultancy. Our goal is to empower businesses and drive success in the global market.

                        </p>
                        <p>
                            Choose EXIM Global as your trusted partner in international trade. With every transaction, we demonstrate our dedication to excellence and our commitment to fostering a more connected and prosperous global trade landscape.
                        </p>

                        <Link href="/products" className="btn btn-primary">OUR PRODUCTS</Link>
                    </div>
                    <div className="right">
                        <img src="/assets/home-about-bg.png" alt="" />
                    </div>
                </div>
            </section>

            <Exports />

            <Why fullsection />

            <Founders />

            <Testimonials />

            <ContactForm />
        </>
    )
}

export default HomePage