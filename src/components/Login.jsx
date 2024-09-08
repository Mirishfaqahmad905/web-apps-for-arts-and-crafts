import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';
// import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { loginFun } from './Store/authReducer';
import { faSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaGooglePay, FaGooglePlusG } from 'react-icons/fa';
function Login() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const {loginWithRedirect}=useAuth0();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      Swal.fire(
        'Think ?',
        'Are you filling in all the input fields?',
        'question'
      );
      return;
    }
    // Send a login request to your server
    axios
      .post('http://localhost:30001/login', {
        email: formData.email,
        password: formData.password
      })
      .then((dataa) => {
        if (dataa.data.message === 'Yes, You Are Logged In') {
          // Dispatch the login action with the email as the payload
           if(dispatch(loginFun(dataa.data.user))){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'You are logged in successfully',
              showConfirmButton: false,
              timer: 2000
            });
            window.location.href = '/';
          }
          // Redirect to the desired page or perform any other actions
      
        } else if (dataa.data.message === 'Sorry, Incorrect Password') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect Password or email!',
            footer: '<a href="">Why do I have this issue?</a>'
          });
        }
      })
      .catch((err) => {
        console.log('Error occurred during login: ' + err);
      });
    // Clear the form data here (optional)
    setFormData({ email: '', password: '' });
  };
  return (
    <MDBContainer className="my-5" style={{ width: 1000 }}>
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src='./Images/c4.jpg' alt="login form" className='rounded-start w-100' />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                 <Button onClick={()=>navigate(-1)} style={{marginLeft:23,marginRight:23}}>  Back</Button>
                {/* <MDBIcon icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} /> */}
                <span className="h1 fw-bold mb-0" style={{ textAlign: 'center' }}>Login Here</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <MDBInput wrapperClass='mb-4' onChange={handleChange} name='email' placeholder='Enter Your Email' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4' onChange={handleChange} name='password' placeholder='Enter your Password' id='formControlLg' type='password' size="lg" />
              <Button className="mb-4 px-5" color='dark' onClick={handleSubmit} size='lg'>Login</Button>
              <Button style={{background:'red',border:'none'}} onClick={()=>loginWithRedirect()}><FaGooglePlusG size={30} /></Button>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81', marginTop:21 }}  >Dont have an account? <Link to={'/signup'}> <Button>CreateAccount</Button></Link></p>
              <div className='d-flex flex-row justify-content-start'>
                 
             
                {/* <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a> */}
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
