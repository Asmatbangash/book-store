import React from "react";
import { InputBox, Button } from "../components";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";

function SignUp() {
  return (
    <div className="max-w-screen mt-10 relative flex  flex-col p-4 rounded-md text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Welcome To <span className="text-[#7747ff]">book-store</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Sign up to your account
      </div>
      <form className="flex justify-center items-center flex-col gap-3">
        <div className="block relative">
          <label
            for="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Name
          </label>
          <InputBox
            type="text"
            id="email"
            className="rounded border border-gray-200 text-sm w-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            placeholder="enter name"
          />
        </div>
        <div className="block relative">
          <label
            for="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <InputBox
            type="email"
            id="email"
            className="rounded border border-gray-200 text-sm w-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            placeholder="abc@email.com"
          />
        </div>
        <div className="block relative">
          <label
            for="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <InputBox
            type="password"
            id="password"
            className="rounded border border-gray-200 text-sm w-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            placeholder="*****"
          />
        </div>
        <div className="block relative">
          <label
            for="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Address
          </label>
          <InputBox
            type="text"
            id="email"
            className="rounded border border-gray-200 text-sm w-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            placeholder="enter your Address"
          />
        </div>
        <div>
          <a className="text-sm text-[#7747ff]" href="#">
            Forgot your password?
          </a>
        </div>
        <Button
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          text="Submit"
        />
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Already have an account?{" "}
        <a
          className="text-sm text-[#7747ff] cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          login
        </a>
      </div>
      <LogIn />
    </div>
  );
}

export default SignUp;
