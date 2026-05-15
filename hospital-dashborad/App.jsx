import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Sidebar from "./components/Sidebar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  // 🔐 LOGIN HANDLER
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 🚪 LOGOUT HANDLER
  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("dashboard"); // reset page after logout
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      
      {/* SIDEBAR */}
      <Sidebar
        setPage={setPage}
        toggleDark={() => setDarkMode(!darkMode)}
        onLogout={handleLogout}
      />

      {/* PAGES */}
      {page === "dashboard" && (
        <Dashboard onLogout={handleLogout} />
      )}

      {page === "patients" && <Patients />}
    </div>
  );
}

export default App;
