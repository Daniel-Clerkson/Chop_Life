import { FaVenusMars } from "react-icons/fa";
import {BadgeCheck} from "lucide-react"

const VendorCard = ({ vendor, index }) => {
    return (
      <div
      key={index}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
    >
      <img
        src={vendor.logo}
        alt={vendor.name}
        className="h-64 w-full object-cover"
      />
      <div className="p-6 space-y-3 text-center">
      <div className="flex text-md">
          {vendor.isApproved 
          ? 
            <BadgeCheck className="text-green-500" />
          : ""}
        </div>
        <h3 className="text-2xl font-semibold text-orange-600">
          {vendor.name}
        </h3>
        <p className="text-gray-700">{vendor.description}</p>
        <div className="text-sm text-gray-600">
          ⭐ 4.9 • {vendor.geoAddress.address}
        </div>
        <button className="mt-4 cursor-pointer w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-purple-800 transition">
          View Vendor
        </button>
      </div>
    </div>
    );
  };
  
  export default VendorCard;
  