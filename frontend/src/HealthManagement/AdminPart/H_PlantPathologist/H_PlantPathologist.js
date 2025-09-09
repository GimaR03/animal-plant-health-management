import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import H_PlantPathologistForm from "./H_PlantPathologistForm";


const H_PlantPathologist = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchEntries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/plant-pathologists");
      setEntries(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => { fetchEntries(); }, []);

  const handleDelete = async id => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      await axios.delete(`http://localhost:5000/api/plant-pathologists/${id}`);
      fetchEntries();
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Plant Pathologist Details", 14, 20);
    autoTable(doc, {
      head: [["Full Name","Email","Phone","License","Specializations","Qualifications","Experience","DOB","Gender"]],
      body: entries.map(e => [
        e.fullName,
        e.email,
        e.phoneNo,
        e.licenseNumber,
        Array.isArray(e.specializations) ? e.specializations.join(", ") : e.specializations,
        e.qualifications,
        e.yearsOfExperience,
        e.dateOfBirth ? e.dateOfBirth.split("T")[0] : "",
        e.gender
      ]),
      startY: 30
    });
    doc.save("PlantPathologists.pdf");
  };

  const handleEdit = id => { setEditingId(id); setShowForm(true); };
  const handleAddNew = () => { setEditingId(null); setShowForm(true); };

  return (
    <div className="container">
      <h1>Plant Pathologist Details</h1>
      <div className="button-group">
        <button className="add-btn" onClick={handleAddNew}>Add New Plant Pathologist</button>
        <button className="download-btn" onClick={handleDownloadPDF}>Download PDF</button>
      </div>

      {showForm && (
        <H_PlantPathologistForm
          id={editingId}
          onSuccess={() => { setShowForm(false); fetchEntries(); }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {loading ? (<p>Loading...</p>) : (
        <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>License</th>
              <th>Specializations</th>
              <th>Qualifications</th>
              <th>Experience</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Actions</th>
              <th>Direct Contact</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(d => (
              <tr key={d._id}>
                <td><img src={`http://localhost:5000/Health_uploads/${d.profilePhoto}`} alt={d.fullName} className="profile-photo" /></td>
                <td>{d.fullName}</td>
                <td>{d.email}</td>
                <td>{d.phoneNo}</td>
                <td>{d.licenseNumber}</td>
                <td>{Array.isArray(d.specializations) ? d.specializations.join(", ") : d.specializations}</td>
                <td>{d.qualifications}</td>
                <td>{d.yearsOfExperience}</td>
                <td>{d.dateOfBirth ? d.dateOfBirth.split("T")[0] : ""}</td>
                <td>{d.gender}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(d._id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(d._id)}>Delete</button>
                </td>
                <td>
                  <a href={`https://wa.me/${d.phoneNo}`} target="_blank" rel="noreferrer">
                    <button className="contact-btn">WhatsApp</button>
                  </a>
                  <a href={`mailto:${d.email}`} target="_blank" rel="noreferrer">
                    <button className="contact-btn">Email</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default H_PlantPathologist;
