
import { useState, useEffect, useRef } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

import restaurantsData from "../data/restaurants";
import RestaurantCard from "./RestaurantCard";

function Restaurants() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Relevance");
  const [showSort, setShowSort] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const sectionRef = useRef(null);
  const toolbarRef = useRef(null);

  // Detect when toolbar reaches the top
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !toolbarRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const toolbarRect = toolbarRef.current.getBoundingClientRect();

      const shouldStick =
        toolbarRect.top <= 0 &&
        sectionRect.top < 0 &&
        sectionRect.bottom > toolbarRect.height;

      setIsSticky((previous) =>
        previous !== shouldStick ? shouldStick : previous
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Sorting options
  const sortOptions = [
    "Relevance",
    "Delivery Time",
    "Rating",
    "Cost: Low to High",
    "Cost: High to Low"
  ];

  // Search and sorting
  const filteredRestaurants = [...restaurantsData]
    .filter((restaurant) => {
      const searchText = search.toLowerCase();

      return (
        restaurant.name.toLowerCase().includes(searchText) ||
        restaurant.cuisines.toLowerCase().includes(searchText)
      );
    })
    .sort((a, b) => {
      if (sortBy === "Delivery Time") {
        return parseInt(a.time) - parseInt(b.time);
      }

      if (sortBy === "Rating") {
        return Number(b.rating) - Number(a.rating);
      }

      if (sortBy === "Cost: Low to High") {
        return (a.price || 0) - (b.price || 0);
      }

      if (sortBy === "Cost: High to Low") {
        return (b.price || 0) - (a.price || 0);
      }

      return 0;
    });

  return (
    <section
      ref={sectionRef}
      className="w-full pt-10 pb-12"
    >

      {/* Centered Section Heading */}
      <div className="w-full max-w-[1280px] mx-auto px-4">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
          Restaurants with online food delivery in Solapur
        </h2>

      </div>

      {/* Sticky Toolbar */}
      <div
        ref={toolbarRef}
        className="sticky top-0 z-40 w-full bg-white py-3 mb-8"
      >

        <div className="w-full max-w-[1280px] mx-auto px-4">

          <div className="flex items-center justify-between gap-4">

            {/* Sort By - Left */}
            <div className="relative shrink-0">

              <button
                onClick={() => setShowSort(!showSort)}
                className="border border-gray-300 rounded-full px-5 py-3 flex items-center gap-3 hover:bg-gray-100 text-gray-800 font-medium"
              >
                Sort By
                <FaChevronDown className="text-sm" />
              </button>

              {/* Sort Dropdown */}
              {showSort && (
                <div className="absolute left-0 top-14 z-50 bg-white shadow-xl border border-gray-200 rounded-xl w-64 p-4">

                  {sortOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center justify-between py-3 cursor-pointer text-sm text-gray-700"
                    >
                      {option}

                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === option}
                        onChange={() => {
                          setSortBy(option);
                          setShowSort(false);
                        }}
                        className="accent-orange-500 w-4 h-4"
                      />
                    </label>
                  ))}

                </div>
              )}

            </div>

            {/* Search - Only When Sticky */}
            {isSticky && (
              <div className="relative w-full max-w-80 ml-auto">

                <input
                  type="text"
                  placeholder="Search for restaurant and food"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                />

                <FaSearch className="absolute right-4 top-4 text-gray-500" />

              </div>
            )}

          </div>

        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="w-full max-w-[1280px] mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id || restaurant.name}
              restaurant={restaurant}
            />
          ))}

        </div>

        {/* No Results */}
        {filteredRestaurants.length === 0 && (
          <p className="text-center text-gray-500 py-16">
            No restaurants found. Try another search.
          </p>
        )}

      </div>

    </section>
  );
}

export default Restaurants;
