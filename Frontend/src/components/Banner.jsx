import React from 'react'
import { bookImg } from '../../public/index.js'
import Button from './Button.jsx'
import InputBox from './InputBox.jsx'

function Banner() {
  return (
    <div className="w-screen-full mx-auto max-sm:px-0 px-6 hero bg-white min-h-screen">
  <div className="hero-content w-1/1 flex-col lg:flex-row-reverse">
    <div className='w-full'>
    <img
      src={bookImg}
      className="w-full h-full rounded-lg"
    />
    </div>
    <div className='w-full'>
      <h1 className="text-5xl font-bold">Hello!, Welcome here to learn something <span className='text-pink-600'>new everyday!</span></h1>
      <p className="py-6">
      This is a friendly place where you can discover interesting and useful things. Each day, we share simple and fun lessons to help you learn and grow. Whether it's about technology, science, life tips, or creative ideas, there's always something new waiting for you. Learning doesn’t have to be hard — we make it easy and enjoyable. So come back often, stay curious, and enjoy this journey of learning with us. Let’s grow our knowledge together, one day at a time. You’re never too old or too young to learn something new!.
      </p>
      <div>
      <form className="form relative mb-7">
  <InputBox type='email' className='input w-full rounded-full px-8 py-3 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md'
  placeholder="email"/>
</form>
      </div>
      <Button text='Get started'/>
    </div>
  </div>
</div>
  )
}

export default Banner