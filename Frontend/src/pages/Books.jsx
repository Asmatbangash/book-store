import React from 'react'
import {Card }from '../components/index.js'
import apiSample from '../../public/apiSample.json'

function Books() {
  const apiSampleData = apiSample.map((data) => data)
  return (
    <div className='w-screen-full min-h-screen dark:bg-slate-900 dark:text-white'>
    <div className='flex justify-center items-center flex-col my-25'>
      <h1 className='text-3xl font-bold mb-5 text-center'>We are delighted to have you <span className='text-pink-600'>Here!</span>😊</h1>
      <p className='text-center px-10'>Whether you're a passionate reader, a casual browser, or searching for your next favorite book, you've come to the right place. Our platform offers a wide collection of genres, authors, and bestsellers to explore. We are committed to providing a seamless, enjoyable shopping experience with user-friendly navigation, personalized recommendations, and secure checkout. From timeless classics to the latest releases, there's something for everyone. Thank you for choosing us as your reading companion. Happy browsing, and we hope you discover a story that stays with you forever!</p>
    </div>
    <div className='flex justify-center items-center flex-wrap'>
       {apiSampleData.map((data) =>(
            <Card data={data} key='' className='mx-4 dark:bg-slate-900 dark:text-white dark:border-1 '/>
         ))}
    </div>
    </div>
  )
}

export default Books