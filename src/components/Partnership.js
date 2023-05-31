import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import swiper1 from "../images/swiper_1.jpg"
import swiper2 from "../images/swiper_2.jpg"
import swiper3 from "../images/swiper_3.jpg"
import swiper4 from "../images/swiper_4.jpg"
import swiper5 from "../images/swiper_5.jpg"
import swiper6 from "../images/swiper_6.jpg"
import swiper7 from "../images/swiper_7.jpg"
import swiper8 from "../images/halal_blue.jpg"

import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"

function Partnership() {
    return (
        <div className="w-full">
            <div className="w-full px-8 py-16 max-w-w1300 mx-auto">
                <FadeUpOnScroll>
                    <h3 className="capitalize font-poppins font-bold text-3xl scr800:text-4xl text-center scr800:text-left text-[#0F70B7]  transition-all duration-1000 ">
                        Accreditation and partnership:
                    </h3>
                </FadeUpOnScroll>
                <FadeUpOnScroll>
                    <Swiper
                        slidesPerView={2}
                        breakpoints={{
                            800: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                        }}
                        className="my-10"
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={slide.src}
                                    alt=""
                                    className="h-28 scr600:h-40 mx-auto"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FadeUpOnScroll>
            </div>
        </div>
    )
}

export default Partnership

const slides = [
    {
        src: swiper1,
    },
    {
        src: swiper2,
    },
    {
        src: swiper3,
    },
    {
        src: swiper4,
    },
    {
        src: swiper5,
    },
    {
        src: swiper6,
    },
    {
        src: swiper7,
    },
    {
        src: swiper8,
    },
]
