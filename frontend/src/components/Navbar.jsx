import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";


const Navbar = () => {
 const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setSticky(true);
      else setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/course"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          Course
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          About
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar max-w-screen-2xl container mx-auto md:px-20 px-4 sticky top-0 z-50 transition-colors duration-300 ${
        sticky
          ? "shadow-md bg-white dark:bg-gray-800"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-slate-800 rounded-box w-52 text-gray-900 dark:text-gray-100"
          >
            {navItem}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition ml-2"
        >
          bookStore
        </Link>
      </div>

      {/* Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-gray-900 dark:text-gray-100">
          {navItem}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end flex items-center gap-2 md:gap-4">
        {/* Search input */}
        <label className="hidden sm:flex items-center gap-2 border p-1 md:p-2 border-gray-400 dark:border-gray-600 rounded-md px-2 hover:border-gray-600 dark:hover:border-gray-400 transition">
          <svg
            className="h-[1em] opacity-50 text-gray-700 dark:text-gray-300"
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            aria-label="Search"
            placeholder="Search"
            className="grow outline-none bg-transparent text-sm sm:text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </label>

        {/* Theme controller */}
        <label className="swap swap-rotate cursor-pointer">
          <input type="checkbox" className="theme-controller hidden" />
          {/* Sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Moon icon */}
          <svg
            className="swap-on h-8 w-8 fill-current text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      {/* Logout or Login button */}
{authUser ? (
  <Logout />
) : (
  <div>
    <button
      className="btn bg-black dark:bg-gray-200 dark:text-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-300 transition text-sm sm:text-base"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      Login
    </button>
    <Login />
  </div>
)}


        
      </div>
    </div>
  );
};

export default Navbar;
