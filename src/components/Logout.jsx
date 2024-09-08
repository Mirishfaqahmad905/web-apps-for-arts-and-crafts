import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutFun } from './Store/authReducer';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Logout = () => {
  const { logout, isAuthenticated: auth0IsAuthenticated, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.user);
    const LogoutIndivisulaleuser=()=>{
 Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, LoutOut Me!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(logoutFun());
          Swal.fire('Logout!', 'Your are Logout Successfully.', 'success');
          // Perform the action you want when the user confirms
        }
      });
    }
    // You can redirect to a different page after logout if needed
    // window.location.href = '/signup';
  return (
    <div className="container-center" style={{ textAlign: 'center' }}>    
      <h2>Are You Want to Logout</h2>
      {auth0IsAuthenticated ? (
        <Button onClick={() => logout({ returnTo: window.location.origin })} >
     {logoutInProgress ? 'Logging out...' : 'Log Out'}
        </Button>  
) : (
 <Link to={'/'}>
           <Button onClick={LogoutIndivisulaleuser} >
            Logout 
        </Button>
       </Link>
      )}
    </div>
  );
};
export default Logout;
