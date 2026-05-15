import { motion } from "framer-motion";
import "../styles/sidebar.css";

export default function Sidebar({ setPage, toggleDark }) {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <h2 className="logo">🏥 Hospital</h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPage("dashboard")}
      >
        Dashboard
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPage("patients")}
      >
        Patients
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDark}
      >
        🌙 Toggle Mode
      </motion.button>

    </motion.div>
  );
}
