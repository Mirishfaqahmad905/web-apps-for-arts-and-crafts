import React, { useState } from 'react';
import '../Css/Admin.css';
import Lottie from 'lottie-react';
import axios from 'axios';
import animationData from '../assets/Admin.json';
import { useDispatch, useSelector } from 'react-redux';
import {  AdminLogin } from './Store/authReducer';
import Swal from 'sweetalert2';
import {emojify} from 'react-emoji';
const Admin = () => {
  
     const [catchData,setCatchData]=useState();
      console.log(catchData)
      const dispatch=useDispatch();
      const [adminCredential, setAdminCredential] = useState({
    Admin_name: '',
    Admin_email: '',
    Admin_password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminCredential((prevCredential) => ({
      ...prevCredential,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminCredential);
    axios.post('http://localhost:30001/Admin', {
      Admin_name: adminCredential.Admin_name,
      Admin_email: adminCredential.Admin_email,
      Admin_password: adminCredential.Admin_password,
    })
    .then((response) => {
      console.log(response);
       setCatchData(response.data.admin);
        dispatch(AdminLogin(response.data.admin));
      
       if(response.data.message==='Successfully logged in'){
        Swal.fire({
          title: `😍`,
          text: "Your are Logged In To Dashboard!",
          icon: "success"
        });
          window.location.href="/dashboard";
          return;
       }
        else if(response.data.message==='please login Correct way '){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Please Login To Correct Way ?</a>'
          });
           dispatch(AdminLogout());
              return;
        }
    })
    .catch((err) => {
      console.log('Error occurred during fetching data from server: ' + err);
    });

    // Reset the form fields
    setAdminCredential({
      Admin_name: '',
      Admin_email: '',
      Admin_password: '',
    });
  };

  return (
    <div className="admin_form_container">
      <div className="admin-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Admin Name</label>
          <input
            type="text"
            name="Admin_name"
            id="name"
            placeholder="Enter Your Name"
            value={adminCredential.Admin_name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Admin Email</label>
          <input
            type="email"
            name="Admin_email"
            id="email"
            placeholder="Admin Email"
            value={adminCredential.Admin_email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Admin Password</label>
          <input
            type="password"
            name="Admin_password"
            id="password"
            placeholder="Admin Password"
            value={adminCredential.Admin_password}
            onChange={handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="left-image-secontion">
        <Lottie style={{ width: 600 }} animationData={animationData} />
      </div>
    </div>
  );
};

export default Admin;
