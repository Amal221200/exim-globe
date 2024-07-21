import { foundersData } from "@/lib/data"
import "./styles.scss"

const Founders = ({ showAbout, headingBackground }: { showAbout?: boolean, headingBackground?: boolean }) => {
    return (
        <section id="founders">
            {
                headingBackground ? (
                    <div className="headings">
                        <h2 className="section-heading">About Founders</h2>
                        <h3 className="section-heading">We Are Leading International Company <br /> In The World</h3>
                    </div>
                ) : (
                    <>
                        <h2 className="section-heading">About Founders</h2>
                        <h3 className="section-heading">We Are Leading International Company <br /> In The World</h3>
                    </>
                )
            }
            <div className="container">
                {
                    foundersData.map((founder, key) => (
                        <div className="box" key={key}>
                            <img src={founder.img} alt="" />
                            <div className="info">
                                <h3>{founder.name}</h3>
                                <p>({founder.country})</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                showAbout && <a href="#about" className="btn btn-primary">ABOUT US</a>
            }
        </section>
    )
}

export default Founders