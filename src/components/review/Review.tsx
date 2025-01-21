"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import ReviewItem from "./ReviewItem";
import './review.css'

const reviewData = [
  {
    id: 1,
    name: "Somalia D. Silva",
    position: "Business Manager",
    review:
      "On the other hand denounce righteous indignation and dislike men who beguile and demoralize charms pleasure the moment blinded desire cannot foresee pain and trouble that are bound to ensue.",
    avatar: "/images/review-info.png",
    stars: "/images/star.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Project Manager",
    review:
      "On the other hand denounce righteous indignation and dislike men who beguile and demoralize charms pleasure the moment blinded desire cannot foresee pain and trouble that are bound to ensue.",
    avatar: "/images/review-info.png",
    stars: "/images/star.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Project Manager",
    review:
      "On the other hand denounce righteous indignation and dislike men who beguile and demoralize charms pleasure the moment blinded desire cannot foresee pain and trouble that are bound to ensue.",
    avatar: "/images/review-info.png",
    stars: "/images/star.png",
  },
];

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (currentSlide: number, nextSlide: number) => setCurrentSlide(nextSlide), // Explicitly typed arguments
  };
  return (
    <div className="review bg-dark text-white py-20 px-4">
      <div className="container" data-aos="fade-up" >
        <div className="grid items-center grid-cols-2">
          <div className="md:col-span-1 col-span-12">
            <Slider {...sliderSettings} className="cursor-grabbing">
              {reviewData.map((review) => (
                <ReviewItem
                  key={review.id}
                  name={review.name}
                  position={review.position}
                  review={review.review}
                  avatar={review.avatar}
                  stars={review.stars}
                />
              ))}
            </Slider>
            <p className="text-white review-nav mt-12 ">
              <strong>0{currentSlide + 1}</strong> <span></span> 0{reviewData.length}
            </p>
          </div>

          <div className="text-end mt-12 md:mt-0 col-span-12 md:col-span-1">
            <div className="ms-auto relative flex items-center justify-end">
              <img
                src="/images/videoplay.png"
                className="md:me-[-40px] me-[-250px] relative z-20"
                alt="Video play button"
              />
              <img src="/images/img-video.png" className="relative w-full md:w-auto z-10" alt="Video thumbnail" />
              <img src="/images/bg-testimonials.png" className="bg-testimonials md:block hidden"  alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
