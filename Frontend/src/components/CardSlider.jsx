import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import {  book2 } from '../../public/index.js';

function CardSlider() {
    const cards=[
        {img:book2, title:"Eloquent JavaScript ", desc:"Deeply explores modern JavaScript with examples, helping beginners and advanced learners master programming concepts.", price: ""},
        {img:book2, title:"Introduction to Computer Science", desc:"Comprehensive guide to computer science fundamentals, including algorithms, data structures, and web development", price: ""},
        {img:book2, title:"Think Python ", desc:"Beginner-friendly Python book that teaches programming logic and problem-solving through clear, practical examples.", price: ""},
        {img:book2, title:"Designing Interfaces", desc:"Covers essential user interface patterns and principles for building intuitive, user-centered digital products.", price: ""},
        {img:book2, title:"Data Structure and algorithms", desc:"Learn key structures, sorting, searching, and algorithm design with real-world Programming examples.", price: ""}
    ]
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
        <div className='w-screen-full mx-auto px-8 max-sm:px-3'>
         <h1 className="text-3xl font-bold">Free Offered Courses</h1>
         <p>Access a wide range of free course books covering programming, design, business, and more—perfect for enhancing your knowledge and supporting your studies. These resources include beginner to advanced materials, written by industry experts, ideal for self-paced learning, exam preparation, and practical skill development across multiple professional and academic fields.</p>
        <div className="  slider-container my-10 ">
          <Slider {...settings}>
            {
                cards.map((card)=>(                    
                        <Card img={card.img} title={card.title} desc={card.desc} price={card.price}/>
                ))
            }
          </Slider>
        </div>
        </div>
      );
    }

export default CardSlider