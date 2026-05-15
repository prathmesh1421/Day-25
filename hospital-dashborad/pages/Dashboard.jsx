import { motion } from "framer-motion";
import "../styles/dashboard.css";

export default function Dashboard({ onLogout }) {
  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Top Bar */}
      <div className="top-bar">
        <h1>Hospital Dashboard</h1>

        <motion.button
          className="logout-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onLogout}
        >
          Logout
        </motion.button>
      </div>

      {/* Stats Cards */}
      <div className="cards">
        <Card title="Patients" value="120" icon="👨‍⚕️" />
        <Card title="Doctors" value="35" icon="🩺" />
        <Card title="Appointments" value="89" icon="📅" />
        <Card title="Emergency" value="12" icon="🚑" />
      </div>

      {/* Recent Activity */}
      <div className="section">
        <h2>Recent Activity</h2>
        <ul>
          <li>✔ Patient John admitted</li>
          <li>✔ Appointment booked</li>
          <li>✔ Doctor assigned</li>
        </ul>
      </div>
    </motion.div>
  );
}

function Card({ title, value, icon }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </motion.div>
  );
}
