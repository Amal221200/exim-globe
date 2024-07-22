"use client"
import { Autoplay } from "swiper/modules";
import "./style.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

const Memberships = () => {
    return (
        <div id="membership">
            <div className="container">
                <h2>Membership & Certifications</h2>
                <div className="swiper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={14}
                        loop={true}
                        autoplay={{
                            pauseOnMouseEnter: true
                        }}
                        modules={[Autoplay]}
                        className="my-swiper"
                    >
                        <SwiperSlide className="slide">
                            <img src="/assets/certificates/FIEO.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="/assets/certificates/GST.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="/assets/certificates/ICE.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="/assets/certificates/MSME.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img src="/assets/certificates/Spice-Board.webp" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Memberships