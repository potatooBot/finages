import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./casousel.css";
import styles from "../style";
import Button from "./Button";
import { axis_cred_card,sbi,sbi_card } from "../assets";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1000, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
     sbi_card
  },
  {
    url:
     sbi_card
  },
  //Second image url
  {
    url:
      sbi_card
  },
  //Third image url
  {
    url:
     axis_cred_card
  },

  //Fourth image url

  {
    url:
      sbi_card
  }
];
const Slider = () => {
  return (
    <div className="parent">

      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
              <a href="/Contact">

              <button key={index} type="button" className={` mx-20 my-10 slider py-4 px-5  font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  Contact Us
  </button>
  </a>
            </div>
          );
      
        })}
      </Carousel>
  
 
    </div>
    
  );
};
export default Slider;
