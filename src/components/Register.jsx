import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setUserData }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(form);
    navigate('/account');
  };

  return (
    <div className="card">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Full Name*" required />
        <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone number*" required />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address*" required />
        <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password*" required />
        <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Company name" />
        <p className="label">Are you an Agency?*</p>
        <div className="radio-group">
          <label><input type="radio" name="agency" value="Yes" onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="agency" value="No" onChange={handleChange} /> No</label>
        </div>
        <button type="submit" className="btn primary">Create Account</button>
      </form>
    </div>
  );
};

export default Register;