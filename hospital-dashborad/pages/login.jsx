import { motion } from "framer-motion";
import "../styles/login.css";

export default function Login({ onLogin }) {
  return (
    <motion.div className="login-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="login-box">
        <h2>Hospital Login</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onLogin}>
          Login
        </motion.button>
      </div>
    </motion.div>
  );
}
