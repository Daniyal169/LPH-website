import React from 'react'
import "./Testimonial.css"
import TestBox from './TestBox'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Testimonial() {
    const testimonials = [
        {
            title: "CEO of Settle Homes",
            name: "Serena Huage",
            content: "LPH Company's work on the Settle Homes website was exceptional. Their attention to detail greatly improved our client experience. Highly recommended!",
        },
        {
            title: "CEO of Arabian Safari",
            name: "Fahad",
            content: "LPH Company created an amazing Desert Safari Booking website. Their creativity and technical skills made it engaging and responsive. I'm very pleased!",
        },
        {
            title: "CEO of Mushtaq Health Clinic",
            name: "Dr. Abid Mustaq",
            content: "LPH Company did an excellent job on our clinic website. They made it user-friendly and visually appealing, enhancing our patient interactions.",
        },
        {
            title: "CEO of LPH Company",
            name: "Sara Khan",
            content: "LPH Company's expertise in both hardware and software solutions has transformed our operations. Their innovative approach and commitment to excellence. ",
        },
        {
            title: "CEO of Construction and Consultancy",
            name: "Mansoor Iqbal",
            content: "LPH Company's work on our website was impressive. They delivered a modern site that perfectly showcases our services. Great job!",
        },
    ];



    return (
        <div className="testimonial">
            <h1 className="testHead" data-aos="slide-right">Testimonial</h1>
            <div className="testimonialBoxes" data-aos="fade-up">

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={"10px"}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        700: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index} >
                            <TestBox title={item.title} content={item.content} name={item.name} />
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial