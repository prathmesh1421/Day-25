import { useState } from "react";
import { motion } from "framer-motion";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const addOrUpdatePatient = () => {
    if (!name) return;

    if (editId) {
      setPatients(patients.map(p =>
        p.id === editId ? { ...p, name } : p
      ));
      setEditId(null);
    } else {
      setPatients([...patients, { id: Date.now(), name }]);
    }

    setName("");
  };

  const deletePatient = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  const editPatient = (p) => {
    setName(p.name);
    setEditId(p.id);
  };

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="patients-page">
      <h1>Patients Management</h1>

      {/* Input */}
      <div className="form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter patient name"
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addOrUpdatePatient}
        >
          {editId ? "Update" : "Add"}
        </motion.button>
      </div>

      {/* Search */}
      <input
        className="search"
        placeholder="Search patient..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredPatients.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>
                <button onClick={() => editPatient(p)}>Edit</button>
                <button onClick={() => deletePatient(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
