import React, { useContext, useState } from "react";
import { InputBox, Button } from "../components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BookStoreContext } from "../context/BookStoreContex";

function LogIn() {
  const { userlogIn } = useContext(BookStoreContext);
  const [data, setData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();

  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const response = await axios.post(
        "http://localhost:5050/api/v1/user/login",
        userData,
        {
          withCredentials: true, // important for sending/receiving cookies
        }
      );
      if (response.data.statusCode) {
        userlogIn(response.data.data);
        alert(response.data.msg);
        setData({ email: "", password: "" });
        navigate("/");
      }
      // window.location.reload();
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "something went wrong";
      setErrorMsg(errorMsg);
    }
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <h1 className="text-center my-6">Login</h1>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm bg-black text-white btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form
            onSubmit={handlSubmit}
            className="flex justify-center items-center flex-col gap-3 dark:bg-slate-900 "
          >
            {errorMsg ? errorMsg : null}
            <div className="block relative">
              <label
                htmlFor="email"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2 dark:text-white"
              >
                Email
              </label>
              <InputBox
                type="email"
                id="email"
                className="rounded border border-gray-200 text-sm w-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 max-sm:w-72  dark:text-white"
                placeholder="abc@email.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required={true}
              />
            </div>
            <div className="block relative">
              <label
                htmlFor="password"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2  dark:text-white"
              >
                Password
              </label>
              <InputBox
                type="password"
                id="password"
                className="rounded border border-gray-200 text-sm w-sm font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 max-sm:w-72  dark:text-white"
                placeholder="*****"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required={true}
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
          <div className="text-center text-black my-3 dark:text-white">
            Don't have an account?
            <Link className="text-sm text-[#7747ff]" to="/sign-up">
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default LogIn;
