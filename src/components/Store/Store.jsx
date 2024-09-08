import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import cartReducer from './createSlice'; // Replace with the correct path to your cart slice
import authSlice from './authReducer';
import thunk from 'redux-thunk';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth:authSlice,
  },

});

export default store;




// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './createSlice';
// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     // Add other reducers here if needed
//   },
// });
// export default store;
// Import necessary libraries




// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './createSlice';

// // Function to load state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('cartData');
//     if (serializedState === null) {
//       return undefined; // If there's no data in localStorage, return undefined
//     }
//     return JSON.parse(serializedState); // Parse the JSON data from localStorage
//   } catch (error) {
//     return undefined; // Handle errors gracefully
//   }
// };

// // Function to save state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('cartData', serializedState); // Save the state as JSON
//   } catch (error) {
//     // Handle errors gracefully
//   }
// };

// // Create the Redux store with persisted state
// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     // Add other reducers here if needed
//   },
//   preloadedState: loadState(), // Load the state from localStorage
// });

// // Subscribe to store changes and save to localStorage
// store.subscribe(() => {
//   saveState(store.getState().cart); // Save only the cart data
// });

// export default store;
