
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#f1f1f6] text-gray-600 overflow-hidden">

      
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 text-center lg:text-left">
          For better experience, download the Swiggy app now
        </h2>

        <div className="flex flex-wrap justify-center gap-4 shrink-0">

          <a
            href="https://play.google.com/store/apps/details?id=in.swiggy.android"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://appure.io/badges/playstore/en.svg"
              alt="Get it on Google Play"
              className="w-40 md:w-44"
            />
          </a>

          <a
            href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              className="w-40 md:w-44"
            />
          </a>

        </div>
      </div>

      <div className="border-t border-gray-300" />

      
      <div className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr_1.3fr] gap-x-6 gap-y-12">

        
        <div className="min-w-0">

          <img
            src="/images/swlogo.png"
            alt="Swiggy"
            className="w-48 h-16 object-contain object-left mix-blend-multiply"
          />

          <p className="text-sm mt-3">
            © 2026 Swiggy Limited
          </p>

        </div>

        
        <div className="min-w-0">

          <h3 className="font-bold text-gray-900 text-lg mb-5">
            Company
          </h3>

          <ul className="space-y-5 text-sm">
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Swiggy Corporate</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Team</a></li>
            <li><a href="#" className="hover:text-orange-500">Swiggy One</a></li>
            <li><a href="#" className="hover:text-orange-500">Swiggy Instamart</a></li>
            <li><a href="#" className="hover:text-orange-500">Swiggy Dineout</a></li>
          </ul>

        </div>

        
        <div className="min-w-0">

          <h3 className="font-bold text-gray-900 text-lg mb-5">
            Contact Us
          </h3>

          <ul className="space-y-5 text-sm">
            <li><a href="#" className="hover:text-orange-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-orange-500">Partner With Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Ride With Us</a></li>
          </ul>

          <h3 className="font-bold text-gray-900 text-lg mt-16 mb-5">
            Legal
          </h3>

          <ul className="space-y-5 text-sm">
            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Investor Relations</a></li>
          </ul>

        </div>

        
        <div className="min-w-0">

          <h3 className="font-bold text-gray-900 text-lg mb-5">
            Available In:
          </h3>

          <ul className="space-y-5 text-sm">
            <li><a href="#" className="hover:text-orange-500">Bangalore</a></li>
            <li><a href="#" className="hover:text-orange-500">Gurgaon</a></li>
            <li><a href="#" className="hover:text-orange-500">Hyderabad</a></li>
            <li><a href="#" className="hover:text-orange-500">Delhi</a></li>
            <li><a href="#" className="hover:text-orange-500">Mumbai</a></li>
            <li><a href="#" className="hover:text-orange-500">Pune</a></li>
          </ul>

          <select className="mt-5 w-full max-w-40 border border-gray-300 rounded-lg px-3 py-2 bg-transparent text-sm outline-none cursor-pointer">
            <option>679 cities</option>
            <option>All cities</option>
          </select>

        </div>

        
        <div className="min-w-47.5">

          <h3 className="font-bold text-gray-900 text-lg mb-5">
            Life at Swiggy
          </h3>

          <ul className="space-y-5 text-sm">
            <li><a href="#" className="hover:text-orange-500">Explore with Swiggy</a></li>
            <li><a href="#" className="hover:text-orange-500">Swiggy News</a></li>
            <li><a href="#" className="hover:text-orange-500">Snackables</a></li>
          </ul>

        
          <h3 className="font-bold text-gray-900 text-lg mt-16 mb-5">
            Social Links
          </h3>

          <div className="flex flex-nowrap items-center gap-4 text-xl whitespace-nowrap">

            <a
              href="https://www.linkedin.com/company/swiggy-in/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedin />
            </a>

            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebook />
            </a>

            <a href="#" aria-label="Pinterest" className="hover:text-red-600">
              <FaPinterest />
            </a>

            <a href="#" aria-label="Twitter" className="hover:text-sky-500">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
