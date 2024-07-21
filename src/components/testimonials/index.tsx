import { testimonialsData } from "@/lib/data"
import Testimonial from "../testimonial"
import "./styles.scss"

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h2 className="section-heading">What Our Clients Say</h2>
        <h3 className="section-heading">Testimonials</h3>
        <div className="container">
            {
                testimonialsData.map((testimonialData , key) => (
                    <Testimonial key={key} testimonialData={testimonialData} />
                ))
            }
            
        </div>
    </section>
  )
}

export default Testimonials