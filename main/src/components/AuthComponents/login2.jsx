import React from 'react';

const Login2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/choplife-logo.png" // Replace with your actual logo path
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
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-purple-700 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="#" className="text-orange-600 font-medium hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login2;
