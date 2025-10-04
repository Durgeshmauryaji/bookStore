import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

function Signup() {
  const navigate = useNavigate(); // navigation hook
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    // ✅ onSubmit function define karo
    const onSubmit = (data) => {
      console.log("Form Data:", data)
    }

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        {/* Box with border */}
        <div className="relative border-2 border-gray-400 p-8 rounded-lg shadow-lg   bg-gray-100 text-slate-800">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ❌ Cross Button */}
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
            onClick={() => navigate("/")} // ✅ Login page pe redirect karega
          >
            ✕
          </button>

          <h3 className="font-bold text-lg text-center">SignUp</h3>

          <div className="mt-4 space-y-2">
            {/* Name */}
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })} 
              className="w-80 px-3 border rounded-md outline-none py-2"
            /> <br />
            {errors.name && <span className="text-red-500 text-xs px-1">Name is required</span>}

            <br />

            {/* Email */}
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your gmail"
              {...register("email", { required: true })} 
              className="w-80 px-3 border rounded-md outline-none py-2"
            /> <br />
            {errors.email && <span className="text-red-500 text-xs px-1">Email is required</span>}

            <br />

            {/* Password */}
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })} 
              className="w-80 px-3 border rounded-md outline-none py-2"
            /> <br />
            {errors.password && <span className="text-red-500 text-xs px-1">Password is required</span>}

          </div>

          <br />
          <div className="flex justify-between items-center">
            {/* button */}
            <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 block">
              SignUp
            </button>
            <p>
              Have Account?{" "}
              <Link
                to="/"
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
