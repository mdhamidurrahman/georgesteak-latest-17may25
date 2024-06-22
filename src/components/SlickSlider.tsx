import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SlickSlider() {
    var settings = {
        autoplay:true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]
    };
    return (
        <div className='slick_diner'>
           <div className="slikc_postion">
           <Slider {...settings}>
                <div className='slick_img'>
                   <img src="assets\image\paboutus01.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\pcuisine.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\pgiftcards.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\pparties.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\slide01.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\slide04.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\slide05.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\slide03.jpg" alt="" />
                </div>
                <div className='slick_img'>
                    <img src="assets\image\pmenus.jpg" alt="" />
                </div>
            </Slider>
           </div>
        </div>

    )
}
