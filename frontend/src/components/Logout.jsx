import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null); // ✅ simply set authUser to null
      toast.success("Logout Successfully!");
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
