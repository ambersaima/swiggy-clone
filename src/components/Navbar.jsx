
import {
  FaBriefcase,
  FaSearch,
  FaPercent,
  FaLifeRing,
  FaUser,
  FaChevronDown
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* Centered Navbar Content */}
      <div className="w-full max-w-7xl mx-auto px-4 h-24 flex items-center justify-between gap-6">

        {/* Logo and Location */}
        <div className="flex items-center gap-10 shrink-0">

          <div className="w-23.75 h-23.75 rounded-2xl overflow-hidden shrink-0">
  <img
    src="/images/swigylogo.webp"
    alt="Swiggy"
    className="w-full h-full object-cover"
  />
</div>
          {/* Location */}
          <div className="flex items-center gap-3 cursor-pointer">

            <div>
              <h3 className="font-bold text-gray-900 underline underline-offset-8">
                Other
              </h3>

              <p className="text-sm text-gray-500 mt-1 whitespace-nowrap">
                Select your location
              </p>
            </div>

            <FaChevronDown className="text-orange-500" />

          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-7 text-gray-800 font-semibold">

          <a
            href="#"
            className="hidden xl:flex items-center gap-3 hover:text-orange-500 whitespace-nowrap"
          >
            <FaBriefcase />
            Swiggy Corporate
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-orange-500 whitespace-nowrap"
          >
            <FaSearch />
            Search
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-orange-500 whitespace-nowrap"
          >
            <FaPercent />
            Offer New
            <span className="text-orange-500 text-xs">NEW</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-orange-500 whitespace-nowrap"
          >
            <FaLifeRing />
            Help
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-orange-500 whitespace-nowrap"
          >
            <FaUser />
            Sign In
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
