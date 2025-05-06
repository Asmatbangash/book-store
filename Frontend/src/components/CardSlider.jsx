import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import apiSample from '../../public/apiSample.json'

function CardSlider() {
   const sampleApiData = apiSample.filter((data) => data.catogory === "Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1380,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className='w-screen-full mx-auto px-8 max-sm:px-3 dark:bg-slate-900 dark:text-white '>
         <h1 className="text-3xl font-bold">Free Offered Courses</h1>
         <p>Access a wide range of free course books covering programming, design, business, and more—perfect for enhancing your knowledge and supporting your studies. These resources include beginner to advanced materials, written by industry experts, ideal for self-paced learning, exam preparation, and practical skill development across multiple professional and academic fields.</p>
        <div className="  slider-container my-10 ">
          <Slider {...settings}>
            {
                sampleApiData.map((data)=>(                    
                        <Card data={data} key="" className='dark:bg-slate-900 dark:text-white dark:border-1'/>
                ))
            }
          </Slider>
        </div>
        </div>
      );
    }

export default CardSlider