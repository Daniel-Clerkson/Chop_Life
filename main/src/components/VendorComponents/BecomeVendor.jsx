import { useState } from "react";
import { API_BASE } from "../AuthComponents/Auth";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BecomeVendor = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    description: "",
    email: "",
    phone: "",
    logo: null, // file object
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setForm({ ...form, logo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("address", form.address);
      formData.append("description", form.description);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("logo", form.logo); // image file

      const res = await fetch(`${API_BASE}/vendors/apply`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw await res.json();
      const data = await res.json();
      setSuccess(data.message || "Application submitted successfully!");
      setForm({
        name: "",
        address: "",
        description: "",
        email: "",
        phone: "",
        logo: null,
      });
    } catch (err) {
      setError(err.message || "Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 flex items-center justify-center px-4 py-8">
        <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/Images/logo.png"
              alt="ChopLife Logo"
              className="h-16 drop-shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">
            Become a Vendor
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Join ChopLife and grow your business with us.
          </p>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          {success && (
            <p className="text-green-600 mb-4 text-center">{success}</p>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Business name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              required
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Business address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              required
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Business description"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Contact email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              required
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              required
            />
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                loading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-purple-700 hover:opacity-90"
              }`}
            >
              {loading ? "Submitting..." : "Apply Now"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BecomeVendor;
