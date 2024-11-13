// src/AlumniRegistration.js
import React, { useState } from 'react';
import axios from 'axios';

const AlumniRegistration = () => {
  const [alumni, setAlumni] = useState({
    Name: '', Email: '', Pass: '', Phone: '', RollNo: '', Year: '', Branch: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumni((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register/alumni', alumni);
      alert('Alumni registered successfully!');
    } catch (error) {
      console.error('Error registering alumni:', error);
      alert('Error registering alumni.');
    }
  };

  return (
    <div>
      <h1>Register Alumni</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" value={alumni.Name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="Email" value={alumni.Email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="Pass" value={alumni.Pass} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="Phone" value={alumni.Phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Roll Number:
          <input type="number" name="RollNo" value={alumni.RollNo} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Year:
          <input type="text" name="Year" value={alumni.Year} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Branch:
          <input type="text" name="Branch" value={alumni.Branch} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register Alumni</button>
      </form>
    </div>
  );
};

export default AlumniRegistration;
