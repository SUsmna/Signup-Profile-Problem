import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import "./Header";
import "./styles.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => !field)) {
      setMessage('All the fields are mandatory');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    const token = Math.random().toString(36).substr(2);
    localStorage.setItem('user', JSON.stringify({ ...formData, token }));
    dispatch(setUser({ ...formData, token }));
    setMessage('Successfully Signed Up!');
    setTimeout(() => navigate('/profile'), 2000);
  };

  return (
    <div className='Signup'>
      <h2 style={{ color:"white" }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} /><br />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} /><br />
        <button type="submit">Signup</button>
      </form>
      {message && <p style={{ color: message.includes('Successfully') ? 'red' : 'green' }}>{message}</p>}
    </div>
  );
};

export default Signup;