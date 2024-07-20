import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../redux/actions';
// import "./Header";
import "./styles.css";



const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <div className='div1'>
      <h2 style={{ color:"white" }}>User Profile</h2>
      <p style={{ color:"white" }}>Full Name: {user.name}</p>
      <p style={{ color:"white" }}>Email: {user.email}</p>
      <p style={{ color:"white" }}>Password: {user.password}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
