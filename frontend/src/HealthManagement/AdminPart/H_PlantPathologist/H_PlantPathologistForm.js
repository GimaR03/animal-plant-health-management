import React, { useState, useEffect } from "react";
import axios from "axios";

const H_PlantPathologistForm = ({ id, onSuccess, onCancel }) => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    licenseNumber: "",
    specializations: "",
    qualifications: "",
    yearsOfExperience: "",
    dateOfBirth: "",
    gender: "Male",
    profilePhoto: null
  });

  useEffect(() => {
    if (id) {
      axios.get("http://localhost:5000/api/plant-pathologists")
        .then(res => {
          const entry = res.data.find(e => e._id === id);
          if (entry) {
            setData({
              fullName: entry.fullName,
              email: entry.email,
              phoneNo: entry.phoneNo,
              licenseNumber: entry.licenseNumber,
              specializations: Array.isArray(entry.specializations) ? entry.specializations.join(", ") : entry.specializations,
              qualifications: entry.qualifications,
              yearsOfExperience: entry.yearsOfExperience,
              dateOfBirth: entry.dateOfBirth ? entry.dateOfBirth.split("T")[0] : "",
              gender: entry.gender,
              profilePhoto: null
            });
          }
        });
    }
  }, [id]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") setData({...data, profilePhoto: files[0]});
    else setData({...data, [name]: value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === "specializations") formData.append(key, data[key].split(",").map(s => s.trim()));
      else formData.append(key, data[key]);
    });

    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/plant-pathologists/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      } else {
        await axios.post("http://localhost:5000/api/plant-pathologists", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      }
      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  //planat pathologistic form
  return (
    <div className="form-container">
      <h3>{id ? "Edit Plant Pathologist" : "Add New Plant Pathologist"}</h3>
      <form onSubmit={handleSubmit}>
        <input name="fullName" value={data.fullName} onChange={handleChange} placeholder="Full Name" required/>
        <input name="email" type="email" value={data.email} onChange={handleChange} placeholder="Email" required/>
        <input name="phoneNo" value={data.phoneNo} onChange={handleChange} placeholder="Phone No" required/>
        <input name="licenseNumber" value={data.licenseNumber} onChange={handleChange} placeholder="License Number" required/>
        <input name="specializations" value={data.specializations} onChange={handleChange} placeholder="Specializations (comma separated)" required/>
        <input name="qualifications" value={data.qualifications} onChange={handleChange} placeholder="Qualifications" required/>
        <input name="yearsOfExperience" type="number" value={data.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" required/>
        <input name="dateOfBirth" type="date" value={data.dateOfBirth} onChange={handleChange}/>
        <select name="gender" value={data.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input type="file" name="profilePhoto" onChange={handleChange} accept="image/*"/>
        <button type="submit">{id ? "Update" : "Add"}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default H_PlantPathologistForm;
