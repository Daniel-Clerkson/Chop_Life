import { useEffect, useState } from "react";
import { API_BASE } from "../AuthComponents/Auth";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AdminLayout from "./AdminLayout";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [deliveryGuys, setDeliveryGuys] = useState([]);
  const [status, setStatus] = useState({ message: null, error: null });

  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(`${API_BASE}/admin/${endpoint}`);
      if (!res.ok) throw await res.json();
      const data = await res.json();
      setter(data);
    } catch (err) {
      setStatus({ message: null, error: err.message });
    }
  };

  useEffect(() => {
    fetchData("users", setUsers);
    fetchData("admins", setAdmins);
    fetchData("transactions", setTransactions);
    fetchData("delivery", setDeliveryGuys);
  }, []);

  const handleAction = async (action, userId) => {
    try {
      const res = await fetch(`${API_BASE}/admin/${action}/${userId}`, {
        method: "POST",
      });
      if (!res.ok) throw await res.json();
      const data = await res.json();
      setStatus({ message: data.message, error: null });
    } catch (err) {
      setStatus({ message: null, error: err.message });
    }
  };

  return (
    <AdminLayout>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/Images/logo.png" alt="ChopLife Logo" className="h-16 drop-shadow-md" />
        </div>

        <h1 className="text-4xl font-bold text-purple-800 text-center mb-10">Admin Panel</h1>

        {status.message && <p className="text-green-600 text-center mb-4">{status.message}</p>}
        {status.error && <p className="text-red-500 text-center mb-4">{status.error}</p>}

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ChartCard
            title="User Roles"
            type="pie"
            data={{
              labels: ["Users", "Admins", "Delivery"],
              datasets: [
                {
                  data: [users.length, admins.length, deliveryGuys.length],
                  backgroundColor: ["#8b5cf6", "#f97316", "#10b981"],
                },
              ],
            }}
          />
          <ChartCard
            title="Monthly Transactions"
            type="bar"
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "₦ Transactions",
                  data: transactions.map((tx) => tx.amount),
                  backgroundColor: "#f97316",
                },
              ],
            }}
          />
          <ChartCard
            title="Delivery Activity"
            type="line"
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              datasets: [
                {
                  label: "Deliveries",
                  data: deliveryGuys.map((guy) => guy.deliveries || 0),
                  borderColor: "#10b981",
                  backgroundColor: "rgba(16,185,129,0.2)",
                  fill: true,
                },
              ],
            }}
          />
        </div>

        {/* Sections */}
        <Section
          title="All Users"
          data={users}
          actions={[
            { label: "Approve as Admin", action: "approve-admin" },
            { label: "Ban User", action: "ban-user" },
            { label: "Lift Ban", action: "lift-ban" },
          ]}
          onAction={handleAction}
        />

        <Section title="Admins" data={admins} />

        <Section
          title="Transactions"
          data={transactions}
          renderItem={(tx) => (
            <div>
              <p><strong>ID:</strong> {tx.id}</p>
              <p><strong>Amount:</strong> ₦{tx.amount}</p>
              <p><strong>User:</strong> {tx.user}</p>
              <p><strong>Status:</strong> {tx.status}</p>
            </div>
          )}
        />

        <Section title="Delivery Team" data={deliveryGuys} />
      </div>
    </AdminLayout>
  );
};

const Section = ({ title, data, actions = [], renderItem, onAction }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold text-purple-700 mb-4">{title}</h2>
    {data.length === 0 ? (
      <p className="text-gray-500">No records found.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            {renderItem ? (
              renderItem(item)
            ) : (
              <div>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>ID:</strong> {item.id}</p>
              </div>
            )}
            {actions.length > 0 && (
              <div className="mt-4 space-y-2">
                {actions.map(({ label, action }) => (
                  <button
                    key={action}
                    onClick={() => onAction(action, item.id)}
                    className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);

const ChartCard = ({ title, type, data }) => {
  const ChartComponent = {
    pie: Pie,
    bar: Bar,
    line: Line,
  }[type];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-purple-800 mb-4">{title}</h3>
      <ChartComponent
        data={data}
        options={{
          responsive: true,
          plugins: { legend: { position: "bottom" } },
        }}
      />
    </div>
  );
};

export default AdminPanel;
