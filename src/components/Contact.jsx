import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 

import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
} from 'mdb-react-ui-kit';
import '../Css/Contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
 
const Contact = () => {
   const navigate=useNavigate();
   const {isAuthenticated:auth0IsAuthenticated,  user: auth0User}=useAuth0();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [textArea,setTextArea]=useState('');
   const [actions,setAction]=useState("");
   const UserData=useSelector((state)=>state.auth.user);
     const LoadingState=useSelector((state)=>state.auth.isAuthenticated);
   const handleSubmit = (e) => {
     
    e.preventDefault();
  };
     
  return (
    <div className="container-form-react-page">
      <div className="header-form-react">
        <h2 style={{ textAlign: 'center', padding: 23 }}>Contact Us</h2>
      </div>
      <div className="google-map-react">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.24677448345!2d71.6805302221184!3d34.82488745323915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dbededd45c4925%3A0x2777d423fee3dd3!2sMunda%20qala!5e0!3m2!1sen!2s!4v1694240589499!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-us-hed">
       
        <h1 style={{ textAlign: 'center', padding: 23 }}>Contact Form </h1>
        <Button  style={{textAlign:'center', marginLeft:600}} onClick={()=>navigate(-1)} > Back</Button>
      </div>
      <div className="mdb_bootstrap_contact_form">
        <div className="left-size-container">
          <div className="_image-sectiona_contact">
            <img
              src="./Images/contact.jpg"
              alt=""
            />
            
          </div>
        </div>
        {/* https://formspree.io/f/mrgwkvap */}
         {LoadingState   || auth0IsAuthenticated   ? (<>  
         
          <div className="right-contact-section">
          <form action="https://formspree.io/f/mrgwkvap " method="post">
            <div className="name-form">
              <label htmlFor="Name">
                <FaUser />
              </label>
              <input type="text" name="name"  value={LoadingState ? UserData.name:auth0User.name} placeholder="Enter Your Name" id="" />
            </div>
            <div className="email-form">
              <label htmlFor="email">
                <FaEnvelope />
              </label>
              <input type="email" name="email"   value={LoadingState ? UserData.email:auth0User.email} placeholder="Enter Your email here" id="" />
            </div>
            <div className="message_form">
              <label htmlFor="message">
                <FaComment />
              </label>
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="10"
                placeholder="Write Your message here" 
              ></textarea>
            </div>
            <input type="submit"  name="submit" id="" />
          </form>
        </div>
          </> ):
           
           (<>
            <Button  onClick={()=>location.href="/login"} style={{marginRight:23}}>Login </Button> <br /> <hr />
           
             <h3>To Contact with Community plese Login First </h3> </>)}
       
      </div>
    </div>
  );
};
export default Contact;
