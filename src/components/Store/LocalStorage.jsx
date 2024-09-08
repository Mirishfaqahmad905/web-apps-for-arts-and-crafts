// cartLocalStorage.js

// Function to get cart data from local storage
export const getCartFromLocalStorage = () => {
    try {
      const cartData = localStorage.getItem('cart');
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error while getting cart data from local storage:', error);
      return [];
    }
  };
  
  // Function to set cart data in local storage
  export const setCartInLocalStorage = async (cart) => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error while setting cart data in local storage:', error);
    }
  };
  