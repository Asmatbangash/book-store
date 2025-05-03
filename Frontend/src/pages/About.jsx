import React from 'react'
import {Card }from '../components/index.js'
import { book2 } from '../../public/index.js'

function About() {
    const cards=[
            {img:book2, title:"Eloquent JavaScript ", desc:"Deeply explores modern JavaScript with examples, helping beginners and advanced learners master programming concepts.", price: "0.00", catogory: "Free"},
            {img:book2, title:"ICT", desc:"Comprehensive guide to computer science fundamentals, including algorithms, data structures, and web development", price: "0.00", catogory: "Free"},
            {img:book2, title:"Think Python ", desc:"Beginner-friendly Python book that teaches programming logic and problem-solving through clear, practical examples.", price: "0.00", catogory: "Free"},
            {img:book2, title:"Designing Interfaces", desc:"Covers essential user interface patterns and principles for building intuitive, user-centered digital products.", price: "0.00", catogory: "Free"},
            {img:book2, title:"Data Structure and algorithms", desc:"Learn key structures, sorting, searching, and algorithm design with real-world Programming examples.", price: "0.00", catogory: "Free"},
            {img:book2, title:"Data Structure and algorithms", desc:"Learn key structures, sorting, searching, and algorithm design with real-world Programming examples.", price: "0.00", catogory: "Free"}
        ]
  return (
    <div className='my-10'>
    <div className='flex justify-center items-center flex-col h-70 w-screen-full'>
      <h1 className='text-3xl font-bold mb-5'>We are delighted to have you <span className='text-pink-600'>Here!</span>😊</h1>
      <p className='text-center px-10'>Whether you're a passionate reader, a casual browser, or searching for your next favorite book, you've come to the right place. Our platform offers a wide collection of genres, authors, and bestsellers to explore. We are committed to providing a seamless, enjoyable shopping experience with user-friendly navigation, personalized recommendations, and secure checkout. From timeless classics to the latest releases, there's something for everyone. Thank you for choosing us as your reading companion. Happy browsing, and we hope you discover a story that stays with you forever!</p>
    </div>
    <div className='flex justify-center items-center flex-wrap'>
       {cards.map((data) =>(
            <Card data={data} key='' className='mx-4'/>
         ))}
    </div>
    </div>
  )
}

export default About