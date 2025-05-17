import React, { useContext } from "react";
import { Button } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BookStoreContext } from "../context/BookStoreContex";

function LogOut() {
  const { userlogOut } = useContext(BookStoreContext);

  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/user/logOut",
        {},
        { withCredentials: true }
      );
      userlogOut();
      console.log(response); // e.g. "user logOut Sucessfully!"
      // Optionally clear local storage, state, or show toast
      navigate("/sign-up");
    } catch (error) {
      console.error(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
      // Optional: show a toast or alert
    }
  };

  return (
    <Button
      text="Log Out"
      className="btn btn-neutral dark:bg-blue-500 text-sm dark:hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleLogOut}
    />
  );
}

export default LogOut;
