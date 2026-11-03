
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function ExploreSections() {
  const [showCities, setShowCities] = useState(false);
  const [showCuisines, setShowCuisines] = useState(false);

  const cities = [
    "Bangalore",
    "Pune",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Kolkata",
    "Chennai",
    "Chandigarh",
    "Ahmedabad",
    "Jaipur",
    "Nagpur",
    "Solapur",
    "Lucknow",
    "Indore",
    "Nashik",
    "Surat"
  ];

  const cuisines = [
    "Chinese",
    "South Indian",
    "Indian",
    "Kerala",
    "Korean",
    "North Indian",
    "Seafood",
    "Bengali",
    "Punjabi",
    "Italian",
    "Andhra",
    "Maharashtrian",
    "Mexican",
    "Thai",
    "Continental",
    "Mughlai"
  ];

  const explore = [
    "Explore Restaurants Near Me",
    "Explore Top Rated Restaurants Near Me"
  ];

  const cardStyle =
    "min-h-[68px] flex items-center justify-center text-center border border-gray-200 rounded-2xl px-4 py-4 text-gray-800 font-medium hover:shadow-md transition cursor-pointer";

  return (
    <section className="w-full py-16">

      {/* Centered Content */}
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Best Places to Eat Across Cities */}
        <div className="mb-16">

          <h2 className="text-2xl font-bold mb-5 text-left">
            Best Places to Eat Across Cities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {(showCities ? cities : cities.slice(0, 11)).map((city) => (
              <div className={cardStyle} key={city}>
                Best Restaurants in {city}
              </div>
            ))}

            <button
              onClick={() => setShowCities(!showCities)}
              className="min-h-17 border border-gray-200 rounded-2xl text-orange-600 font-bold flex items-center justify-center gap-2 hover:shadow-md transition"
            >
              {showCities ? "Show Less" : "Show More"}
              {showCities ? <FaChevronUp /> : <FaChevronDown />}
            </button>

          </div>
        </div>

        {/* Best Cuisines Near Me */}
        <div className="mb-16">

          <h2 className="text-2xl font-bold mb-5 text-left">
            Best Cuisines Near Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {(showCuisines ? cuisines : cuisines.slice(0, 11)).map((cuisine) => (
              <div className={cardStyle} key={cuisine}>
                {cuisine} Restaurant Near Me
              </div>
            ))}

            <button
              onClick={() => setShowCuisines(!showCuisines)}
              className="min-h-17 border border-gray-200 rounded-2xl text-orange-600 font-bold flex items-center justify-center gap-2 hover:shadow-md transition"
            >
              {showCuisines ? "Show Less" : "Show More"}
              {showCuisines ? <FaChevronUp /> : <FaChevronDown />}
            </button>

          </div>
        </div>

        {/* Explore Restaurants Near Me */}
        <div>

          <h2 className="text-2xl font-bold mb-5 text-left">
            Explore Every Restaurants Near Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {explore.map((item) => (
              <div className={cardStyle} key={item}>
                {item}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default ExploreSections;
