function Hero() {
  return (
    <section className="bg-orange-50 min-h-112.5 px-6 py-16">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Content */}
        <div className="max-w-xl">

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Order food & groceries.
            <span className="text-orange-500">
              {" "}Discover best restaurants.
            </span>
          </h1>

          <p className="text-gray-600 mt-5 text-lg">
            Delicious food delivered to your doorstep.
          </p>

          {/* Search Box */}
          <div className="mt-8 flex gap-3 flex-wrap">

            <input
              type="text"
              placeholder="Enter your delivery location"
              className="border border-gray-300 rounded-lg px-4 py-4 w-72 outline-none focus:border-orange-500"
            />

            <button className="bg-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600">
              Find Food
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700"
            alt="Delicious food"
            className="w-112.5 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;