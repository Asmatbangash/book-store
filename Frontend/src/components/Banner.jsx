import React from "react";
import { bookImg } from "../../public/index.js";
import Button from "./Button.jsx";
import InputBox from "./InputBox.jsx";

function Banner() {
  return (
    <div className="w-screen-full my-20 mx-auto max-sm:px-0 px-6 hero bg-white min-h-screen md:min-h-0 dark:bg-slate-900 dark:text-white">
      <div className="hero-content w-1/1 flex-col lg:flex-row-reverse">
        <div className="w-screen-full">
          <img src={bookImg} className="w-screen-full h-full rounded-lg " />
        </div>
        <div className="w-screen-full">
          <h1 className="text-4xl font-bold">
            Hello!, Welcome here to learn something{" "}
            <span className="text-pink-600">new everyday!</span>
          </h1>
          <p className="py-6">
            This is a friendly place where you can discover interesting and
            useful things. Each day, we share simple and fun lessons to help you
            learn and grow. Whether it's about technology, science, life tips,
            or creative ideas, there's always something new waiting for you.
            Learning doesn’t have to be hard — we make it easy and enjoyable. So
            come back often, stay curious, and enjoy this journey of learning
            with us. Let’s grow our knowledge together, one day at a time.
            You’re never too old or too young to learn something new!.
          </p>
          <div>
            <form className="form relative mb-7 outline-none">
              <label className="input validator join-item dark:bg-gray-800">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <InputBox
                  type="email"
                  placeholder="@email.com"
                  className="input w-full rounded-full px-8 py-3 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 dark:bg-gray-800 dark:placeholder-gray-100 dark:text-gray-100"
                />
              </label>
            </form>
          </div>
          <Button
            text="Get started"
            className="bg-pink-600 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
