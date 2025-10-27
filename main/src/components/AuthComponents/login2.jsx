import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff, Eye } from "lucide-react";


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
          <img
            src="/Images/logo.png" // Replace with your actual logo path
            alt="ChopLife Logo"
            className="h-20 drop-shadow-md"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Log in to continue your ChopLife experience
        </p>

        {/* Login Form */}
        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="you@example.com"
              onChange={(e)=>(handleChange(e))}
              required
            />
          </div>

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-5 text-gray-600"
            >
              {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
            </button>
          </div>
          <button
            className="w-full bg-gradient-to-r from-orange-500 to-purple-700 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Log In
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <p onClick={()=>(navigate("/register"))} className=" cursor-pointer text-orange-600 font-medium hover:underline">
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
