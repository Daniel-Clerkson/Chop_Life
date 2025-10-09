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
        const res = await fetch(`${API_BASE}/product`);
        if (!res.ok) throw await res.json();
        const data = await res.json();
        setMenuItems(data);
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
          <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-8">
            ChopLife Menu
          </h1>

          {loading && (
            <p className="text-center text-gray-600">Loading menu...</p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold text-orange-600">
                  {item.name}
                </h2>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <p className="text-purple-800 font-semibold mt-4">
                  ₦{item.price}
                </p>
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
