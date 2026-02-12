import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Courses() {
  const coursesData = [
    {
      id: 1,
      title: "MERN Stack Full Course",
      category: "Web Development",
      instructor: "Durgesh Kumar",
      duration: "45 Hours",
      level: "Beginner to Advanced",
      rating: 4.8,
      price: 499,
      thumbnail:
        "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    },
    {
      id: 2,
      title: "DSA in C++ Complete",
      category: "DSA",
      instructor: "Durgesh Kumar",
      duration: "60 Hours",
      level: "Intermediate",
      rating: 4.7,
      price: 399,
      thumbnail:
        "https://img.freepik.com/free-vector/programming-concept-illustration_114360-2513.jpg",
    },
    {
      id: 3,
      title: "DBMS + SQL Interview Prep",
      category: "Core Subjects",
      instructor: "Durgesh Kumar",
      duration: "25 Hours",
      level: "Beginner",
      rating: 4.6,
      price: 299,
      thumbnail:
        "https://img.freepik.com/free-vector/database-management-concept-illustration_114360-1243.jpg",
    },
    {
      id: 4,
      title: "React.js Crash Course",
      category: "Frontend",
      instructor: "Durgesh Kumar",
      duration: "30 Hours",
      level: "Beginner",
      rating: 4.9,
      price: 349,
      thumbnail:
        "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    },
    {
      id: 5,
      title: "Node.js Backend Mastery",
      category: "Backend",
      instructor: "Durgesh Kumar",
      duration: "35 Hours",
      level: "Intermediate",
      rating: 4.7,
      price: 399,
      thumbnail:
        "https://img.freepik.com/free-vector/programming-concept-illustration_114360-5692.jpg",
    },
    {
      id: 6,
      title: "MongoDB Atlas + Mongoose",
      category: "Database",
      instructor: "Durgesh Kumar",
      duration: "20 Hours",
      level: "Beginner",
      rating: 4.5,
      price: 249,
      thumbnail:
        "https://img.freepik.com/free-vector/database-management-concept-illustration_114360-1243.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ✅ Full Page Dark Mode Support */}
      <div className="min-h-screen flex flex-col bg-gray-100 text-slate-900 dark:bg-slate-900 dark:text-white pt-24">
        
        {/* Main Content */}
        <div className="flex-grow max-w-screen-2xl mx-auto w-full px-6">
          
          <h1 className="text-3xl font-bold text-center text-pink-600 dark:text-pink-400">
            📚 Our Courses
          </h1>

          <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
            Choose your favorite course and start learning 🚀
          </p>

          {/* COURSES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 pb-10">
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl duration-200"
              >
                {/* IMAGE SECTION */}
                <div className="w-full h-[150px] bg-white dark:bg-slate-800 flex items-center justify-center p-2">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="p-4">
                  <h2 className="text-lg font-bold text-pink-600 dark:text-pink-400 truncate">
                    {course.title}
                  </h2>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Category:{" "}
                    <span className="font-semibold">{course.category}</span>
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Duration:{" "}
                    <span className="font-semibold">{course.duration}</span>
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Level:{" "}
                    <span className="font-semibold">{course.level}</span>
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    ⭐ {course.rating}/5
                  </p>

                  <p className="text-md font-bold text-green-600 mt-2">
                    ₹{course.price}
                  </p>

                  <button className="w-full mt-3 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-200 font-semibold text-sm">
                    Enroll Now 🚀
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Courses;
