
import { FaStar } from "react-icons/fa";

function RestaurantCard({ restaurant }) {
  return (
    <div className="w-full min-w-0 cursor-pointer group">

      
      <div className="w-full h-52 overflow-hidden rounded-2xl bg-gray-100">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x400/f3f4f6/555555?text=Food+Image";
          }}
        />

      </div>

      
      <div className="px-3 pt-3">

        <h3 className="font-bold text-lg text-gray-900 truncate">
          {restaurant.name}
        </h3>


        <div className="flex items-center gap-2 mt-1">

          <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0">
            <FaStar className="text-xs" />
          </span>

          <span className="text-sm font-semibold text-gray-900">
            {restaurant.rating} · {restaurant.time} mins
          </span>

        </div>

        {/* Cuisine */}
        <p className="text-gray-500 text-sm mt-2 truncate">
          {restaurant.cuisines}
        </p>

        {/* Location */}
        <p className="text-gray-500 text-sm mt-1 truncate">
          {restaurant.location}
        </p>

      </div>

    </div>
  );
}

export default RestaurantCard;
