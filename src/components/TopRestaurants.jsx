
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

function TopRestaurants() {
  const scrollRef = useRef(null);

  const restaurants = [
    {
      name: "The Only Place",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600",
      rating: "3.8",
      time: "25-30 mins",
      cuisine: "North Indian, Tandoor, Biryani",
      location: "Ramla Chowk"
    },
    {
      name: "Hotel Ajinkya",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
      rating: "4.4",
      time: "25-30 mins",
      cuisine: "North Indian, Tandoor, Biryani",
      location: "Subhash Chowk"
    },
    {
      name: "The Belgian Waffle Co.",
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600",
      rating: "4.4",
      time: "25-30 mins",
      cuisine: "Waffles, Desserts, Ice Cream",
      location: "Central Solapur"
    },
    {
      name: "McDonald's",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
      rating: "4.2",
      time: "20-25 mins",
      cuisine: "Burgers, Beverages, Cafe, Desserts",
      location: "Central Solapur"
    },
    {
      name: "Hotel Vazir",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
      rating: "4.3",
      time: "15-20 mins",
      cuisine: "North Indian, Tandoor, Biryani",
      location: "Kidwai Chowk"
    },
    {
      name: "Pizza Hut",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
      rating: "4.2",
      time: "25-35 mins",
      cuisine: "Pizzas, Italian, Fast Food",
      location: "Central Solapur"
    },
    {
      name: "KFC",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600",
      rating: "4.1",
      time: "25-35 mins",
      cuisine: "Burgers, Fast Food, Rolls & Wraps",
      location: "Central Solapur"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full py-10 border-b border-gray-200">

      {/* Centered Content */}
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-900 text-left">
            Top restaurant chains in Solapur
          </h2>

          <div className="flex gap-3">

            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <FaArrowRight className="text-gray-700" />
            </button>

          </div>
        </div>

        {/* Restaurant Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-3"
          style={{ scrollbarWidth: "none" }}
        >

          {restaurants.map((restaurant) => (

            <div
              key={restaurant.name}
              className="min-w-70 max-w-70 shrink-0 cursor-pointer group"
            >

              {/* Restaurant Image */}
              <div className="overflow-hidden rounded-2xl shadow-sm bg-gray-100">

                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>

              {/* Restaurant Details */}
              <div className="px-3 pt-3">

                <h3 className="font-bold text-lg text-gray-900 truncate">
                  {restaurant.name}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mt-1">

                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    <FaStar className="text-xs" />
                  </span>

                  <span>
                    {restaurant.rating} · {restaurant.time}
                  </span>

                </div>

                <p className="text-gray-500 text-sm mt-2 truncate">
                  {restaurant.cuisine}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {restaurant.location}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default TopRestaurants;
