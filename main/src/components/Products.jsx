const products = [
  {
    name: "Jollof Fiesta",
    price: "₦3,500",
    image: "../Images/img-1.jpg",
    rating: 4.8,
    description: "Smoky jollof rice served with grilled chicken, fried plantains, and spicy sauce.",
    tags: ["Spicy", "Popular", "Party Favorite"],
  },
  {
    name: "Suya Supreme",
    price: "₦2,800",
    image: "./Images/img-2.jpg",
    rating: 4.8,
    description: "Smoky jollof rice served with grilled chicken, fried plantains, and spicy sauce.",
    tags: ["Spicy", "Popular", "Party Favorite"],
  },
  {
    name: "Egusi Elegance",
    price: "₦4,200",
    image: "./Images/img3.jpg",
    rating: 4.8,
    description: "Smoky jollof rice served with grilled chicken, fried plantains, and spicy sauce.",
    tags: ["Spicy", "Popular", "Party Favorite"],
  },
  {
    name: "Plantain Paradise",
    price: "₦2,000",
    image: "./Images/img-4.jpg",
    rating: 4.8,
    description: "Smoky jollof rice served with grilled chicken, fried plantains, and spicy sauce.",
    tags: ["Spicy", "Popular", "Party Favorite"],
  },
  {
    name: "Grilled Tilapia",
    price: "₦4,800",
    image: "./Images/img-5.jpg",
    rating: 4.8,
    description: "Smoky jollof rice served with grilled chicken, fried plantains, and spicy sauce.",
    tags: ["Spicy", "Popular", "Party Favorite"],
  },
  {
    name: "Yam Porridge Delight",
    price: "₦3,000",
    image: "./Images/img-6.jpg",
    rating: 4.8,
    description: "Smoky jollof rice served with grilled chicken, fried plantains, and spicy sauce.",
    tags: ["Spicy", "Popular", "Party Favorite"],
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-orange-600">
                {product.name}
              </h3>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>⭐ {product.rating}</span>
                <span className="font-bold">{product.price}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-orange-500 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
