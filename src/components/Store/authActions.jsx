// import { loginSuccess } from './authSlice';
// import axios from 'axios';

// export const login = (formData) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://localhost:30001/login', formData);

//     if (response.data.message === 'Yes, You Are Logged In') {
//       // Dispatch the loginSuccess action to update the Redux state
//       dispatch(loginSuccess(response.data.user));

//       // You can optionally store a token in local storage or cookies for authentication

//       // Redirect to the desired page or perform other actions
//       window.location.href = '/';
//     } else if (response.data.message === 'Sorry, Incorrect Password') {
//       // Handle incorrect password
//     }
//   } catch (error) {
//     console.error('Error occurred during login: ' + error);
//     // Handle network or other errors
//   }
// };