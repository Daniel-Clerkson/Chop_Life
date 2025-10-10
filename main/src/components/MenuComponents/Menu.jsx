import { useEffect, useState } from "react";
import { API_BASE } from ".././AuthComponents/Auth";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch menu items from API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/product`);
        if (!res.ok) throw await res.json();
        const data = await res.json();
        setMenuItems(data.data.products);
      } catch (err) {
        setError(err.message || "Failed to load menu");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-10">
            ChopLife Menu
          </h1>

          {loading && (
            <p className="text-center text-gray-600">Loading menu...</p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className="p-6 pt-4 space-7-3">
                  <h2 className="text-2xl mb-2 font-bold text-orange-600">
                    {item.name}
                  </h2>
                  <p className="vendor text-gray-700 mb-5 text-sm hover:underline hover:text-orange-600 cursor-pointer">
                    {item.vendor ? item.vendor.name : "Unknown"}
                  </p>
                  <p className="text-gray-700 mt-2 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>⭐ {item.averageRating}</span>
                    <span className="font-bold">${item.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    {item.isAvailable ? <span className="font-semibold text-green-600">Available</span> : <span className="text-red-600 font-semibold">Unavailable</span>}
                    <p>{item.numOfReview} Reviews</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-orange-100 text-orange-600 mt-2 px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-orange-500 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
