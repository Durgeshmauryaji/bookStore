import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Your message has been submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-slate-900 transition-colors duration-300">
      {/* Form Card */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md relative transition-colors duration-300">
        {/* Close button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Contact Us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">Email is required</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              {...register("message", { required: true })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md outline-none bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition resize-none"
            />
            {errors.message && (
              <span className="text-red-500 text-xs">Message is required</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-2">
            <button
              type="submit"
              className="bg-pink-500 text-white font-medium rounded-md px-5 py-2 hover:bg-pink-600 transition duration-200 shadow-sm"
            >
              Submit
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Need an account?{" "}
              <Link
                to="/signup"
                className="underline text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
