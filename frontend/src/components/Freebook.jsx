import React, { useState, useEffect } from "react";
// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-24 mb-20">
      <div className="text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl pb-4">Free Offered Courses</h1>
        <p className="text-gray-600">
          Step into a world of knowledge with our Free Offered Courses. Learn
          new skills, explore fresh ideas, and grow without limits. Every course
          is designed to guide you toward success — because learning should be
          free and for everyone!
        </p>
      </div>

      <div className="mt-10">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
