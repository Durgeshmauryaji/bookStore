import React from "react";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Route, Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import Contact from "./components/Contact";

function App() {
  return (
   <>
     {/* <Home/>  
     <Course/> */}
   <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>

   </Routes>
   </div>
   </>
  )
}

export default App;
