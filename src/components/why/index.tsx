import "./styles.scss"

const Why = ({ fullsection }: { fullsection?: boolean }) => {
    return (
        <section className={fullsection ? "full-section" : ''} id="why">
            <div className="container">
                <div className="left">
                    <div className="content">
                        <h3>Sustainability</h3>
                        <h2 className="section-heading">Why Choose Us?</h2>
                        <p>“Unparalleled expertise, reliable services, and a commitment to ‘Exporting Excellence.’ Your
                            success
                            is our priority.”</p>
                        <a href="/contact-us" className="btn btn-primary">GET IN TOUCH</a>
                    </div>
                </div>
                <div className="right">
                    <div className="content">
                        <h2 className="section-heading">We Follow Best Practices</h2>
                        <p>
                            “Unmatched expertise, seamless transactions, and a commitment to ‘Exporting Excellence.’ Your
                            success
                            is
                            our priority.”
                        </p>
                        <ul>
                            <li><i className="" data-lucide=""></i>We Build Relations</li>
                            <li><i className="" data-lucide=""></i>Experience & Professional</li>
                            <li><i className="" data-lucide=""></i>High Quality Products</li>
                            <li><i className="" data-lucide=""></i>We Deliver On Time</li>
                            <li><i className="" data-lucide=""></i>Price Benefits</li>
                            <li><i className="" data-lucide=""></i>Complete Client Satisfaction</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why