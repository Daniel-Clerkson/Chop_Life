import { useState } from "react";
import { API_BASE } from "./Auth";
import { Link } from "react-router";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginUser = async ({ email, password }) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw await res.json();
    return await res.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await loginUser(form);
      console.log("Login success:", res);
      // localStorage.setItem("token", res.token); // Uncomment if needed
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="./Images/logo.png" alt="ChopLife Logo" className="h-30 drop-shadow-md" />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Log in to continue your ChopLife experience
        </p>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-purple-700 hover:opacity-90"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to={"/register"} className="text-orange-600 font-medium hover:underline">
            Register
          </Link>
        </p>
        <p className="mt-1 text-center text-sm text-gray-600">
          Don't Remember Your Password {" "}
          <Link to="/forgot-password" className="text-orange-600 font-medium hover:underline">
            Forgot Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
