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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Course</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
    </>
  );

  return (
    // ✅ FULL WIDTH Wrapper
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        sticky ? "shadow-md bg-white dark:bg-gray-800" : "bg-white dark:bg-slate-900"
      }`}
    >
      {/* ✅ Container only for inside content */}
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4">
        <div className="navbar">

          {/* Left side */}
          <div className="navbar-start">
            {/* Mobile dropdown */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-slate-800 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold cursor-pointer">
              bookStore
            </Link>
          </div>

          {/* Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">{navItem}</ul>
          </div>

          {/* Right */}
          <div className="navbar-end flex items-center gap-3">

            {/* Search */}
            <label className="hidden sm:flex items-center gap-2 border p-2 border-gray-400 dark:border-gray-600 rounded-md">
              <input
                type="search"
                placeholder="Search"
                className="grow outline-none bg-transparent"
              />
            </label>

            {/* Theme toggle */}
            <button
              className="btn btn-sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Login/Logout */}
            {authUser ? (
              <Logout />
            ) : (
              <div>
                <button
                  className="btn bg-black text-white hover:bg-gray-800"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
