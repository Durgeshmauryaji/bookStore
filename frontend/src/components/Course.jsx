import React from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
      <div>
        {/* Main Heading */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center leading-snug">
            We're delighted to have you <span className="text-pink-500">Here 🎉</span>
          </h1>
        </div>

        {/* Full-width Paragraph */}
        <div className="mt-6 w-full px-4 md:px-20 text-center">
          <p className="text-lg md:text-xl">
            Welcome to the course! 🎉<br />
            You’ve taken the first step towards expanding your knowledge and skills.<br />
            We’re excited to guide you through this journey with easy-to-follow lessons and practical examples.<br />
            Stay curious, keep learning, and don’t hesitate to explore new concepts along the way.<br />
            Let’s make this learning experience enjoyable and rewarding together!
          </p>
          <Link to="/">
          
                    <button className="bg-pink-500 mt-8 text-white  px-4 py-2 rounded hover:bg-pink-600">Back</button>
          </Link>
        </div>
        <div className="mt-8 grid grid-flow-col-1 md:grid-cols-3 ml-10">
            {
                book.map((item)=>(
                    <Cards item={item} key={item.id} />
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
