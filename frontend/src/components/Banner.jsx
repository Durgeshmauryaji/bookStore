import React from "react";
import banner from "/Banner.png";

const Banner = () => {
  return (
    <div className="bg-base-100 max-w-screen-2xl container pt-12 mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left section (Content) */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
            Dive into a world of knowledge with our curated collection of books.
            Discover new ideas, expand your skills, and make every day a learning
            adventure. Whether you're here for study or curiosity, we've got
            something for everyone.
          </p>

          {/* Email input */}
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 flex-grow hover:border-gray-500 transition dark:border-gray-600 dark:hover:border-gray-400">
              <svg
                className="h-5 w-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M22 7L12 13 2 7"></path>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="outline-none bg-transparent flex-grow text-sm sm:text-base"
              />
            </label>
            <button className="btn bg-pink-500 text-white hover:bg-pink-600 transition text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>

        {/* Right section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={banner}
            alt="banner"
            className="w-[600px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
