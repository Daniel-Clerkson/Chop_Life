import Footer from "../Footer";
const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-purple-100">
      <main className="flex-grow px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
