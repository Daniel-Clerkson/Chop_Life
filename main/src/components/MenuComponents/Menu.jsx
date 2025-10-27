import { useEffect, useState } from "react";
import { API_BASE } from ".././AuthComponents/Auth";
import {BarLoader, BeatLoader, ClipLoader, MoonLoader, PacmanLoader, PulseLoader, RiseLoader} from "react-spinners"
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
        const res = await fetch(`${API_BASE}/product`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(
            errorData.message || res.statusText || "Failed to fetch menu"
          );
        }

        const data = await res.json();
        setMenuItems(data.data.products);
        console.log(data.data.products)
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
            <div className="w-full flex items-center justify-center">

              <ClipLoader
              color="purple"
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            </div>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {menuItems.map((product) => (
          <div
            key={product.id }
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-orange-600">
                {product.name}
              </h3>
              <h3 className="text-lg font-semibold">
                Vendor: <span className="hover:text-orange-600 hover:underline cursor-pointer">{product.vendor.name}</span>
              </h3>
              <p className="text-gray-700">{product.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>⭐ 4.9</span>
                <span className="font-bold">${product.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{product.isAvailiable ? <p className="bg-red-100 p-1 rounded-full text-red-500">Not Availiable</p> : <p className="bg-green-100 text-green-500 py-1 rounded-full">Available</p>}</span>
                <span className="font-bold">{product.numOfReview} Reviews</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                  <span
                    className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs"
                  >
                    {product.category}
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
