// src/AdminRegistration.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminRegistration = () => {
  const [admin, setAdmin] = useState({ Name: '', Email: '', Pass: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register/admin', admin);
      alert('Admin registered successfully!');
    } catch (error) {
      console.error('Error registering admin:', error);
      alert('Error registering admin.');
    }
  };

  return (
    <div>
      <h1>Register Admin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" value={admin.Name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="Email" value={admin.Email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="Pass" value={admin.Pass} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register Admin</button>
      </form>
    </div>
  );
};

export default AdminRegistration;
