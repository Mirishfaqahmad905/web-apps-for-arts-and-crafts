
import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLocalStorage, setCartInLocalStorage } from './LocalStorage'; // Import the utility functions
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(), // Initialize the cart state from local storage
  reducers: {
    add(state, action) {
      state.push(action.payload);
      setCartInLocalStorage(state); // Update local storage when adding items
    },
    remove(state, action) {
      const updatedCart = state.filter(item => item._id !== action.payload);
      state.splice(0, state.length, ...updatedCart); // Update the state while preserving the reference
      setCartInLocalStorage(updatedCart); // Update local storage when removing items
    },
    increment(state, action) {
      const { id } = action.payload;
      const item = state.find(item => item._id === id);
      if (item) {
        item.quantity += 1; // Corrected the spelling to "quantity"
        setCartInLocalStorage(state); // Update local storage when incrementing quantity
      }
    },
    decrement(state, action) {
      const { id } = action.payload;
      const item = state.find(item => item._id === id);
      if (item && item.quantity > 1) { // Corrected the spelling to "quantity"
        item.quantity -= 1; // Corrected the spelling to "quantity"
        setCartInLocalStorage(state); // Update local storage when decrementing quantity
      }
    },
    updateTotalPrice(state) {
      // Calculate the total price based on the items in the cart
      const newTotalPrice = state.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      return { ...state, totalPrice: newTotalPrice }; // Update the totalPrice in the state
    },
    // rateProduct(state, action) {
    //   console.log('Reducer is called with action:', action);
    //   const { productId, rating } = action.payload;
    //   // Update the ratings object with the new rating for the product
    //   state.ratings[productId] = rating;
    // },
    rateProduct(state, action) {
      const { productId, rating } = action.payload;
      // Update the ratings object with the new rating for the product
      state[productId] = rating;
    },
    incrementRating(state, action) {
      const { productId } = action.payload;
      // Increment the rating for the product by one (if it exists)
      if (state[productId] < 5) {
        state[productId] += 1;
      }
    },
    decrementRating(state, action) {
      const { productId } = action.payload;
      // Decrement the rating for the product by one (if it exists)
      if (state[productId] > 0) {
        state[productId] -= 1;
      }
    },
  },
});
// Export the reducer from the slice
export default cartSlice.reducer;
// Export the actions
export const { add, remove, increment, decrement,updateTotalPrice,rateProduct,incrementRating, decrementRating } = cartSlice.actions;



