import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "https://bookstore-1-vdio.onrender.com/user/login",
        userInfo
      );

      if (res.data) {
        toast.success("LoggedIn Successfully!");

        // ✅ Save user in localStorage
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        // ✅ Update auth context
        setAuthUser(res.data.user);

        // ✅ Close modal
        document.getElementById("my_modal_3").close();

        // ✅ Redirect to course page
        navigate("/course");
      }
    } catch (err) {
      if (err.response) {
        toast.error("Login Error! " + err.response.data.message);
      } else {
        toast.error("Login Error!");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gray-100 text-slate-800">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg text-center">Login</h3>

            <div className="mt-4 space-y-2">
              {/* Email */}
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your gmail"
                {...register("email", { required: true })}
                className="w-80 px-3 border rounded-md outline-none"
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm px-1">
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
                className="w-80 px-3 border rounded-md outline-none"
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm px-1">
                  Password is required
                </span>
              )}
            </div>

            <br />
            <br />

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
              >
                Login
              </button>

              <p>
                Not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  {" "}
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
