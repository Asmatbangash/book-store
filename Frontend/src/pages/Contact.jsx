import React from "react";
import { Button, InputBox } from "../components";

function Contact() {
  return (
    <div className="w-screen-full h-screen mt-10 flex justify-center items-center flex-col ">
      <form className="bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md dark:bg-slate-900 dark:text-white">
        <div className="mb-4">
          <label
            for="title"
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
          >
            Full Name
          </label>
          <InputBox
            placeholder="Enter fullName"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-white dark:border-amber-50"
          />
        </div>
        <div className="mb-4">
          <label
            for="title"
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
          >
            Email
          </label>
          <InputBox
            placeholder="Enter email"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-white dark:border-amber-50"
          />
        </div>

        <div className="mb-4">
          <label
            for="content"
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
          >
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Enter your message"
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-white dark:border-amber-50"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <Button
            text="send"
            type="submit"
            className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
