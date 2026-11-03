
import Navbar from "./components/Navbar";
import FoodCategories from "./components/FoodCategories";
import TopRestaurants from "./components/TopRestaurants";
import Restaurants from "./components/Restaurants";
import ExploreSections from "./components/ExploreSections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen">

      {/* Navbar and upper sections */}
      <div className="relative w-full overflow-visible">
        <Navbar />
        <FoodCategories />
        <TopRestaurants />
      </div>

      {/* Restaurant section */}
      <Restaurants />

      {/* Explore sections */}
      <ExploreSections />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
