const VendorCard = ({ vendor }) => {
    return (
      <div className="bg-red-500 rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <img
          src={vendor.logo}
          alt={vendor.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-bold text-purple-800">{vendor.name}</h3>
        <p className="text-gray-600 mt-2">{vendor.description}</p>
        <div className="mt-4 text-sm text-gray-700 space-y-1">
          <p><strong>Email:</strong> {vendor.email}</p>
          <p><strong>Phone:</strong> {vendor.phone}</p>
          <p><strong>Address:</strong> {vendor.address}</p>
        </div>
      </div>
    );
  };
  
  export default VendorCard;
  