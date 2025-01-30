"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/image/project1.png", // Ensure the path is corret.
    description: "Project 1 : A simple login page using React.",
  },
  {
    image: "/image/project2.png", // Ensure the path is correct
    description: "Project 2 : Restaurant home page using html,css,javascript.",
  },
  {
    image: "/image/project3.png", // Ensure the path is correct
    description: "Project 3 : Portfolio Page.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <img
              src={slide.image}
              alt="Project photo"
              className="w-full h-70 object-cover rounded-lg mb-4" // Set the image to be rectangular
            />
            <p className="text-gray-700 italic">{slide.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
