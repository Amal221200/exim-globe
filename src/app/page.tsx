import "./home.scss"
import Exports from "@/components/exports"
import Why from "@/components/why"
import Founders from "@/components/founders"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"

const HomePage = () => {
    return (
        <>
            <main id="home">
                <div className="content">
                    <h1>Exim Global</h1>
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
                            10+ Yrs Of Success as <br /> Merchant Exporter in India <br />
                        </h3>
                        <p>
                            Embark on an export journey with Exim Global – A renowned Merchant Exporter in India, offering
                            seamless exports, import solutions, expert sourcing, and invaluable training and consultancy.
                        </p>
                        <a href="" className="btn btn-dark">WORK WITH US</a>
                    </div>
                    <div className="right">
                        <div className="box">
                            <div>
                                <h2>522+</h2>
                                <p>Successfully Project <br />Finished.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h2>10+</h2>
                                <p>Years of experience <br />with proud</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h2>300+</h2>
                                <p>Deals in 300+ export <br />quality products</p>
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
            {/* <!-- member section -->

    <!-- about section --> */}

            <section id="about">
                <div className="container">
                    <div className="left">
                        <h2>About Exim Global</h2>
                        <p>
                            Welcome to Exim Global, a distinguished brand of Digital Gravity Technologies and a premier Merchant
                            Exporter in India. Since our establishment in 2017, we have become synonymous with excellence in
                            international trade. As a leading player in the export-import industry, Exim Global proudly
                            represents
                            the commitment to quality and professionalism.
                        </p>
                        <p>
                            Operating from Pune, Maharashtra, India, we specialize in a diverse range of products, including
                            fruits,
                            spices, handicrafts, and more. Our dedication to “Exporting Excellence” is reflected not only in the
                            variety of goods we offer but also in the seamless services we provide to clients worldwide.
                        </p>
                        <p>
                            Certified by prestigious organizations such as GST, APEDA, FIEO, and others, Exim Global ensures that
                            every export meets the highest standards of quality and compliance. As a Merchant Exporter in India,
                            we
                            leverage our robust network and industry expertise to source top-tier products from various cities
                            across the country.
                        </p>
                        <p>
                            Exim Global, as a brand under Digital Gravity Technologies, goes beyond traditional exports. We are
                            not
                            just a facilitator of international trade; we are a catalyst for business growth. Our comprehensive
                            services extend to import solutions, expert sourcing, and valuable training and consultancy,
                            empowering
                            businesses for success in the global market.
                        </p>
                        <p>
                            Choose Exim Global as your trusted partner, where each export transaction is a testament to our
                            unwavering commitment to excellence, and every interaction signifies a step toward a brighter, more
                            connected global trade landscape.
                        </p>

                        <a href="/products" className="btn btn-primary">OUR PRODUCTS</a>
                    </div>
                    <div className="right">
                        <img src="/assets/about-home.webp" alt="" />
                    </div>
                </div>
            </section>

            <Exports />

            <Why fullsection />

            <Founders showAbout />

            <Testimonials />

            <ContactForm />
        </>
    )
}

export default HomePage