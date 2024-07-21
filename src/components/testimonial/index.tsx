import { StarIcon } from "lucide-react"
import "./styles.scss"

const Testimonial = ({ testimonialData }: { testimonialData: { img: string, name: string, review: string, country: string } }) => {
    return (
        <div className="testimonial-box">
            <div className="content">
                <div className="top">
                    <img src={testimonialData.img} alt="" />
                    <div>
                        <StarIcon fill="#ffb100" />
                        <StarIcon fill="#ffb100" />
                        <StarIcon fill="#ffb100" />
                        <StarIcon fill="#ffb100" />
                        <StarIcon fill="#ffb100" />
                    </div>
                </div>
                <div>
                    <h3>{testimonialData.name}</h3>
                    <p>"{testimonialData.review}"</p>
                    <h5>{testimonialData.country}</h5>
                </div>
            </div>
        </div>
    )
}

export default Testimonial