import { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jollof Rice",
      price: 2500,
      quantity: 2,
      image: "/Images/img-1.jpg",
    },
    {
      id: 2,
      name: "Grilled Chicken",
      price: 3500,
      quantity: 1,
      image: "./Images/img-2.jpg",
    },
    {
      id: 3,
      name: "Grilled Chicken",
      price: 4500,
      quantity: 1,
      image: "./Images/img-4.jpg",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/Images/logo.png" alt="ChopLife Logo" className="h-16 drop-shadow-md" />
        </div>

        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">₦{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 bg-orange-200 rounded hover:bg-orange-300"
                  >
                    −
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-orange-200 rounded hover:bg-orange-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-6">
              <p className="text-xl font-bold text-purple-800">
                Subtotal: ₦{subtotal.toLocaleString()}
              </p>
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Cart;