import { useEffect, useState } from "react";
import { API_BASE } from "../AuthComponents/Auth";
import VendorCard from "./VendorCard";
import Footer from "../Footer";
import Navbar from "../Navbar";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await fetch(`${API_BASE}/vendors`);
        if (!res.ok) throw await res.json();
        const data = await res.json();
        setVendors(Array.isArray(data) ? data : [data]); // handles single or multiple vendors
      } catch (err) {
        setError(err.message || "Failed to load vendors");
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/Images/logo.png" alt="ChopLife Logo" className="h-16 drop-shadow-md" />
        </div>

        <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-8">
          Our Trusted Vendors
        </h1>

        {loading && <p className="text-center text-gray-600">Loading vendors...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor, index) => (
            <VendorCard key={index} vendor={vendor} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default VendorList;
