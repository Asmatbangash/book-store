import React from 'react'
import { InputBox } from '../components'

function Contact() {
  return (
    <div className='w-screen-full h-screen mt-10 flex justify-center items-center flex-col'>
<form class="bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md">
  <div class="mb-4">
    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
      Full Name
    </label>
    <InputBox
      placeholder="Enter fullName"
      type="text"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div class="mb-4">
    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
      Email
    </label>
    <InputBox
      placeholder="Enter email"
      type="text"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  
  <div class="mb-4">
    <label for="content" class="block text-gray-700 text-sm font-bold mb-2">
      Message
    </label>
    <textarea
      rows="5"
      placeholder="Enter your message"
      id="content"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  </div>
  <div class="flex items-center justify-between">
    <button
      type="submit"
      class="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Send
    </button>
    
  </div>
</form>

    </div>
  )
}

export default Contact