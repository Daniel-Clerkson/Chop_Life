const vendors = [
  {
    name: "Mama T's Kitchen",
    specialty: "Traditional Nigerian",
    location: "Lagos",
    image:"./Images/vendor-1.jpg",
    rating: 4.9,
    description: "Authentic home-style meals with rich flavors and cultural flair.",
    tags: ["Local", "Family-Owned", "Trusted"],
  },
  {
    name: "Grill & Chill",
    specialty: "Street BBQ",
    location: "Abuja",
    image: "./Images/vendor-2.jpg",
    rating: 4.9,
    description: "Authentic home-style meals with rich flavors and cultural flair.",
    tags: ["Local", "Family-Owned", "Trusted"],
  },
  {
    name: "Spice Haven",
    specialty: "Fusion Cuisine",
    location: "Port Harcourt",
    image:"./Images/vendor-3.jpg",
    rating: 4.9,
    description: "Authentic home-style meals with rich flavors and cultural flair.",
    tags: ["Local", "Family-Owned", "Trusted"],
  },
  {
    name: "Chop & Serve",
    specialty: "Quick Bites",
    location: "Kano",
    image:"./Images/vendor-4.jpg",
    rating: 4.9,
    description: "Authentic home-style meals with rich flavors and cultural flair.",
    tags: ["Local", "Family-Owned", "Trusted"],
  },
  {
    name: "Taste Junction",
    specialty: "Continental & Local",
    location: "Ibadan",
    image:"./Images/vendor-5.jpg",
    rating: 4.9,
    description: "Authentic home-style meals with rich flavors and cultural flair.",
    tags: ["Local", "Family-Owned", "Trusted"],
  },
  {
    name: "Flavour House",
    specialty: "Gourmet Catering",
    location: "Enugu",
    image:"./Images/vendor-6.jpg",
    rating: 4.9,
    description: "Authentic home-style meals with rich flavors and cultural flair.",
    tags: ["Local", "Family-Owned", "Trusted"],
      
  },
];

export default function VendorList() {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">Our Vendors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img src={vendor.image} alt={vendor.name} className="h-64 w-full object-cover" />
              <div className="p-6 space-y-3 text-center">
                <h3 className="text-2xl font-semibold text-orange-600">{vendor.name}</h3>
                <p className="text-gray-700">{vendor.description}</p>
                <div className="text-sm text-gray-600">⭐ {vendor.rating} • {vendor.location}</div>
                <div className="flex justify-center flex-wrap gap-2 mt-2">
                  {vendor.tags.map((tag, i) => (
                    <span key={i} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-purple-800 transition">
                  View Vendor
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
