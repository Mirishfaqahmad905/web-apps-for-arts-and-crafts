// import { createSlice } from '@reduxjs/toolkit';

// // Define a constant key for your local storage item
// const LOCAL_STORAGE_KEY = 'authState';

// // Check if there is any previously saved authentication state in local storage
// const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
// const initialStateFromLocalStorage = savedState ? JSON.parse(savedState) : null;

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialStateFromLocalStorage || {
//     isAuthenticated: false,
//     user: null,
//     adminLoginState: false,
//     adminUser: null,
//   },
//   reducers: {
//     loginFun: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//       // Save the updated authentication state to local storage
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
//     },
//     logoutFun: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       // Clear the authentication state from local storage on logout
//       localStorage.removeItem(LOCAL_STORAGE_KEY);
//     },
//     AdminLogin: (state, action) => {
//       state.adminUser = action.payload;
//       state.adminLoginState = true;
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
//     },
//     AdminLogout: (state) => {
//       state.adminUser = null;
//       state.adminLoginState = false;
//       localStorage.removeItem(LOCAL_STORAGE_KEY);
//     },
//   },
// });

// export const { loginFun, logoutFun, AdminLogin, AdminLogout } = authSlice.actions;
// export default authSlice.reducer;












import { createSlice } from '@reduxjs/toolkit';
// Define a constant key for your local storage item
const LOCAL_STORAGE_KEY = 'authState';
// Check if there is any previously saved authentication state in local storage
const initialStateFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateFromLocalStorage || {
    isAuthenticated: false,
    user: null,
    adminLoginState:false,
    adminUser:null,
  },
  reducers: {
    loginFun: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      // Save the updated authentication state to local storage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    },
    logoutFun: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Clear the authentication state from local storage on logout
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    },
    AdminLogin: (state, action) => {
       state.adminUser=action.payload;
       state.adminLoginState=true;
       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
   
      
    },
    AdminLogout:(state,action)=>{
     state.adminUser=null;
     state.adminLoginState=false;  
     localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  },
});
export const { loginFun, logoutFun,AdminLogin,AdminLogout } = authSlice.actions;
export default authSlice.reducer;






















// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const  authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuthenticated: false,
//     user: null,
//   },
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logoutSuccess: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });
// export const { loginSuccess, logoutSuccess } = authSlice.actions;
// export default authSlice.reducer;9