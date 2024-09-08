import React, { useState } from 'react';
import axios from 'axios';
import cors from 'cors';
import Swal from 'sweetalert2';
import { useAuth0 } from "@auth0/auth0-react";
import withReactContent from 'sweetalert2-react-content';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
 
 
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const MySwal = withReactContent(Swal);
import { useDispatch ,useSelector } from 'react-redux';
import { loginFun } from './Store/authReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGoogle } from 'react-icons/fa';
function Signup() {
  const navigate=useNavigate();
   const dispatch=useDispatch();
   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [Response, setResponse] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    subscribe: false,
  });
  const { name, email, password, cpassword, subscribe } = formData;
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]:  value,
    });
     
  };

  const handleSubmit = (e) => {
    console.log('button is working yes ');
    //  dispatch(login({formData}))
    e.preventDefault();
     if(formData.name.length <6){
       return window.alert('write full Name');
        return;
     }
    if(!formData.name || !formData.email || !formData.password){
      Swal.fire(
        'Note?',
        'Complete All Input Fields',
        'question'
      )
        return false;
    }
     else {
       if(formData.password!==formData.cpassword){
        Swal.fire({
          title: 'Password Not Matching ',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
       }  
        else if(formData.password.length <5) {
          Swal.fire({
            title: 'Password Length Must be greater than 5',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
               return;
          } else  {
           
          axios
          .post('http://localhost:30001/postData', formData)
          .then((response) => {
            if(response.data.message==="Email already exists in the database"){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email already exist!',
                footer: '<a href="">Why this  ?</a>'
              })
            return false;
              }
            console.log('Response from server:', response.data); // Add this line for debugging
            setResponse(response.data.message);
            if (response.data.message === 'Data saved successfully in MongoDB') {
              
               let ok= MySwal.fire({
                title: ' thanks You   !',
                text: 'Account Created Sucessfulyy ',
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 2000, // Set the timer for 2 seconds (in milliseconds)
                timerProgressBar: true, // Show a progress bar as the timer counts down
                showConfirmButton: false,
              });
                if(ok){
                   window.location.href='./login';
                }
              return true;
            } else {
              alert('Failed to save data');
              return false;
            }
          })
          .catch((err) => {
            console.error('Error occurred during sending data: ' + err);
          });
    setFormData({
      name: '',
      email: '',
      password: '',
      cpassword: '',
    });
     }
    }
  };
  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md='10'
              lg='6'
              className='order-2 order-lg-1 d-flex flex-column align-items-center'
            >
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                Sign up
              </p>

              <div className='d-flex flex-row align-items-center mb-4 '>
                <MDBIcon icon='user' size='lg' className='me-3' />
                <MDBInput
                  name='name'
                  placeholder='Enter Your Full  Name'
                  value={name}
                  onChange={handleChange}
                  type='text'
                  className='w-100'
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon icon='envelope' size='lg' className='me-3' />
                <MDBInput
                  name='email'
                  type='email'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon icon='lock' size='lg' className='me-3' />
                <MDBInput
                  name='password'
                  type='password'
                  placeholder='Enter Your Password'
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div className='d-flex flex-row align-items-center mb-4'>
                <MDBIcon icon='key' size='lg' className='me-3' />
                <MDBInput
                  name='cpassword'
                  placeholder='Repeat Your Password'
                  type='password'
                  value={cpassword}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                {/* <MDBCheckbox
                  name='subscribe'
                  value={subscribe}
                  id='flexCheckDefault'
                  label='Subscribe to our newsletter'
                  onChange={handleChange}
                /> */}
              </div>
              <Button className='mb-4' size='lg' onClick={handleSubmit}>
                Register
              </Button>
             
             <Link to={'/login'}>
             <Button className='mb-4' size='lg' >
                 Already Have Account 
              </Button>
             </Link>
              <Button onClick={()=>navigate(-1)}>Back</Button>
            </MDBCol>
            <MDBCol
              md='10'
              lg='6'
              className='order-1 order-lg-2 d-flex align-items-center'
            >
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
