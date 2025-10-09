import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <img
          src="/Images/logo.png"
          alt="ChopLife Logo"
          className="h-16 mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold text-purple-800 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <NavLink
          to="/"
          className="inline-block bg-gradient-to-r from-orange-500 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
