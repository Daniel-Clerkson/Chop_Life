import { useState } from "react";
import { API_BASE } from "./Auth";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw await res.json();
      const data = await res.json();
      setMessage(data.message || "Password reset link sent!");
    } catch (err) {
      setError(err.message || "Failed to send reset link");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-purple-100 px-4 py-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl">
        <div className="flex justify-center mb-6">
          <img
            src="/Images/logo.png"
            alt="ChopLife Logo"
            className="h-30 drop-shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">
          Forgot Password
        </h2>
        {message && (
          <p className="text-green-600 mb-4 text-center">{message}</p>
        )}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Remember Your Password ? {" "}
          <Link to={"/register"} className="text-orange-600 font-medium hover:underline">
            Back to Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPassword;
