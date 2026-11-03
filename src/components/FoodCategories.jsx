
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function FoodCategories() {
  const scrollRef = useRef(null);

  const categories = [
    {
      name: "Biryani",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300"
    },
    {
      name: "North Indian",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300"
    },
    {
      name: "Pizzas",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300"
    },
    {
      name: "South Indian",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300"
    },
    {
      name: "Cakes",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300"
    },
    {
      name: "Rolls",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300"
    },
    {
      name: "Chinese",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -450 : 450,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full py-7 md:py-8 border-b border-gray-200">

      {/* Centered Content */}
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Heading and Arrows */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-900 text-left">
            What's on your mind?
          </h2>

          <div className="flex gap-3">

            <button
              onClick={() => scroll("left")}
              className="bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <FaArrowLeft className="text-gray-600 text-sm" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <FaArrowRight className="text-gray-800 text-sm" />
            </button>

          </div>
        </div>

        {/* Food Categories */}
        <div
          ref={scrollRef}
          className="flex items-center justify-between gap-3 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >

          {categories.map((category) => (

            <div
              key={category.name}
              className="min-w-27.5 shrink-0 flex flex-col items-center cursor-pointer group"
            >

              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="w-24 h-24 object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />

              <p className="text-base md:text-lg text-gray-600 mt-2 text-center whitespace-nowrap">
                {category.name}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FoodCategories;
