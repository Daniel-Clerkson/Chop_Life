import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-orange-500 text-white px-6 py-16 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/Images/logo.png"
              alt="ChopLife Logo"
              className="h-20 drop-shadow-lg"
            />
          </div>

          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-orange-100 mb-10">
            Whether you're a vendor, customer, or curious foodie — we're here to
            help.
          </p>

          <div className="space-y-6 text-lg">
            <p>
              <span className="font-semibold text-white">📧 Email:</span>{" "}
              <span className="text-orange-200">support@choplife.ng</span>
            </p>
            <p>
              <span className="font-semibold text-white">📞 Phone:</span>{" "}
              <span className="text-orange-200">+234 801 234 5678</span>
            </p>
            <p>
              <span className="font-semibold text-white">📍 Address:</span>{" "}
              <span className="text-orange-200">
                12 Market Road, Ikeja, Lagos
              </span>
            </p>
            <p>
              <span className="font-semibold text-white">🕒 Hours:</span>{" "}
              <span className="text-orange-200">Mon–Sat, 9AM–6PM</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
