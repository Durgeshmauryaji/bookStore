import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Signup() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "https://bookstore-1-vdio.onrender.com/user/signup",
        userInfo
      );

      if (res.data) {
        toast.success("SignUp Successfully!");

        // ✅ Save user in localStorage
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        // ✅ Update auth context
        setAuthUser(res.data.user);

        // ✅ Redirect to course page or home
        navigate("/course");
      }
    } catch (err) {
      if (err.response) {
        toast.error("SignUp Error! " + err.response.data.message);
      } else {
        toast.error("SignUp Error!");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-slate-900">
      <div className="relative border-2 border-gray-400 p-8 rounded-lg shadow-lg bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 text-xl font-bold"
            onClick={() => navigate("/")}
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
              {...register("fullname", { required: true })}
              className="w-80 px-3 border rounded-md outline-none py-2 bg-white dark:bg-slate-700"
            />
            {errors.fullname && (
              <span className="text-red-500 text-xs px-1">
                Name is required
              </span>
            )}
            <br />

            {/* Email */}
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your gmail"
              {...register("email", { required: true })}
              className="w-80 px-3 border rounded-md outline-none py-2 bg-white dark:bg-slate-700"
            />
            {errors.email && (
              <span className="text-red-500 text-xs px-1">
                Email is required
              </span>
            )}
            <br />

            {/* Password */}
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-80 px-3 border rounded-md outline-none py-2 bg-white dark:bg-slate-700"
            />
            {errors.password && (
              <span className="text-red-500 text-xs px-1">
                Password is required
              </span>
            )}
          </div>

          <br />

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 block"
            >
              SignUp
            </button>

            <p>
              Have Account?{" "}
              <Link to="/" className="underline text-blue-500 cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
