
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, decrement, increment, add } from './Store/createSlice'; // Assuming 'remove' is your Redux action
import StripeCheckout from 'react-stripe-checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Css/Reviews.css';
import '../Css/Strip.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import NoProductData from '../assets/Noproduct.json';
import {
  faTrash,
  faShoppingCart,
  faShoppingBag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import '../Css/Bag.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Lottie from 'lottie-react';
import Successpayment from '../assets/Successfullpayment.json';
import Successpaymen2 from '../assets/Successfullypayment2.json';
import { Link } from 'react-router-dom';
import HomeRating from './HomeRating';
import { AdminLogout } from './Store/authReducer';



const Bag = () => {
  const [myallproduct, setMyallproduct] = useState();
  const [rating_, setRatingn_] = useState();
  const [rating_name, setrating_name] = useState();
  const [comment, setComment] = useState();
  const [showRating, setShowRating] = useState(false);

  //fetching products from database
  const isAdminLogin = useSelector((state) => state.auth.adminLoginState);

  console.log('my all products Data is ' + myallproduct)
  const GetAllData = async () => {
    try {
      const WebProducts = await axios.get('http://localhost:30001/getallData');
      setMyallproduct(WebProducts.data.message);
      console.log(WebProducts.data.message);
    } catch (err) {
      console.log('Error occurred: ', err);
    }
  };

  useEffect(() => {
    GetAllData();
  }, []);

  const handleRate = (e) => {
    setRatingn_(e.target.value);
  }
  const handleName = (e) => {
    setrating_name(e.target.value);
  }
  const handleComent = (e) => {
    setComment(e.target.value);
  }
  const [reviewResponse, setReviewresponse] = useState();
  // State to store the selected item's ID
  const [Product_id, setId] = useState(null);
  //  const [reviewData, setReviewData] = useState({
  //   _id: '',
  //   review_name: '',
  //   rating: 0,
  //   comment: '',
  // });   
  console.log("this is you id " + Product_id);
  const handleReviewSubmit = () => {
    console.log(rating_ + " " + rating_name + " " + comment + " " + Product_id); // Added spaces for clarity
    axios
      .post('http://localhost:30001/review/comment/data', {
        _id: Product_id,
        reviews_name: rating_name, // Fixed the property name from 'reviews_name' to 'review_name'
        Rate: rating_, // Fixed the property name from 'Rate' to 'rating'
        comment: comment,
      })
      .then((response) => {
        setReviewresponse(response.data);
        console.log(response.data);
        if (response.data.message === 'Review added successfully') {
          window.alert('Your review was added successfully');
          setShowRating(false);
        } else {
          window.alert('Error: Review not added successfully');
        }
      })
      .catch((err) => {
        console.log('Error occurred: ' + err);
      });
    // Clear the input fields after submission
    setReviewData({
      _id: '',
      review_name: '', // Make sure this matches the property name you're using in your state
      rating: '', // Make sure this matches the property name you're using in your state
      comment: '',
    });
  };
  const [orderSuccessfull, setSuccessfull] = useState(false);
  const Products = useSelector((state) => state.cart);
  // const product2 = useSelector((state) => state.cart.item);
  console.log(Products);
  const productlength = useSelector((state) => state.cart.length);
  const [cartLeng, setCartLength] = useState(false);
  const [IncreasementQuantaty, setIncreamentQuantaty] = useState(false);
  const [order_data, setOrder_data] = useState([]);
  const [showret, setShowRate] = useState(false);
  const orderId = order_data._id;

  const Username = useSelector((state) => state.auth.user);
  const { logout, isAuthenticated: auth0IsAuthenticated, user: auth0User } = useAuth0();

 // console the shiping address detail 
  
  const IsAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const customerId = auth0User?.sub || Username?._id;
  const dispatch = useDispatch();
  const handleShippingAddress = (address) => {
    console.log(address + "this is shiping address is this ");
  }
  const removeItem = (item) => {
    dispatch(remove(item._id));
    toast.error('Removed Card Item!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      color: 'white',
    });
  };

  const handleToken = async (token) => {
      

    try {
      // Prepare order data to send to the server
      const orderData = {
        token: token.id,
        PaymentMethod: token.card.brand,
        lastfourdigit: token.card.last4,
        products: Products, // Assuming Products contains the list of ordered items
        totalPrice: totalPrice,
        email: auth0User?.email || Username?.email,
        customerId: customerId // Use auth0User.sub if available, otherwise use Username._id
        // Add any other relevant order data here
      };

      // Send a POST request to place the order using Axios
      const orderResponse = await axios.post('http://localhost:30001/order', orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (orderResponse.status === 201) {
        // Order was successfully placed
        console.log('Order placed successfully.');
        console.log("orderdata is " + orderResponse.data.order);
        setOrder_data(orderResponse.data.message);
        setShowRate(true);
        // Set successful state to true
        setSuccessfull(true);
        setShowRating(true);
        Swal.fire(
          `Hello ${auth0User?.name || Username?.name}`,
          'Your payment process was successful',
          'success'
        );
    
        // Prepare payment data
        const paymentData = {
          brand: token.card.brand,
          country: token.country,
          cvc_check: null,
          dynamic_last4: null,
          exp_month: token.card.exp_month,
          exp_year: token.card.exp_year,
          funding: token.card.funding,
          id: token.id,
          last4: token.card.last4,
          name: auth0User?.name || Username?.name, // Use auth0User.name if available, otherwise use Username.name
          email: auth0User?.email || Username?.email, // Use auth0User.email if available, otherwise use Username.email
          amount: totalPrice,
          object: token.card.object,
          tokenization_method: null,
          customerId: customerId,
          orderId: orderId,
          wallet: token.card.wallet || 'N/A',
          shippingaddress: {
            phone: token.phone || 'N/A',
            addressLine1: token.address_line1 || 'N/A',
            addressLine2: token.address_line2 || 'N/A',
            city: token.city || 'N/A',
            state: token.state || 'N/A',
            country: token.country || 'N/A',
            postalCode: token.postal_code || 'N/A',
          },
        
        };
      
        // Send a POST request to store payment data using Axios
        const paymentResponse = await axios.post('http://localhost:30001/send/data', paymentData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (paymentResponse.status === 201) {
          console.log('Payment data stored successfully.');
          window.alert('Payment data stored successfully.');
        } else {
          console.error('Error storing payment data.');
          window.alert('Error storing payment data.');
        }
      } else {
        // Handle errors if the order couldn't be placed
        console.error('Error placing the order.');
        // Set successful state to false
        setSuccessfull(false);
        // You can display an error message to the user.
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const incrementQuantity = (item) => {
    dispatch(increment({ id: item._id }));
    setIncreamentQuantaty(true);
  };
  const decrementQuantity = (item) => {
    setIncreamentQuantaty(true);
    dispatch(decrement({ id: item._id }));
  };
  const totalPrice = Products.reduce((total, item) => total + item.price * item.quantity, 0);
  const [showratingbox, setshowratingbox] = useState(false);
  const ShowRatingBox = () => {
    setshowratingbox(true);
  }
  const Hideratingbox = () => {
    setshowratingbox(false);
  }
  
  return (
    <>
     { isAdminLogin ? (<>
     
     <div className="container_" style={{textAlign:'center',margin:23}}>
       <Button className='' size='lg' onClick={()=>location.href="/logout"}>logout </Button>

  <h1>please make sure to logout and login as customer to see all  cart item </h1>
     </div>
     
      </>):(<>
        <h2 style={{ textAlign: 'center' }}>Cart Item  </h2>
      <div className="cart-container0" style={{ widows: 100 }}>
        {Products.map((item, index) => (
          <div className="container-payment-list" key={index}>
            <div className="container-background-image">
              <div className="image-container-payment" style={{ width: 400, height: 400 }}>
                <img src={item.image_url} alt="" width={500} style={{ width: 400 }} />
              </div>
              <div className="container-item-name">
                <strong> </strong>
                <h2>Product name: {item.product_name}</h2>
                <div className="item-rating">
                  {/* <h2> { setReviewData({ ...reviewData, _id: item_id })}</h2> */}
                  <h6 onClick={() => setId(item._id)}>
                    <HomeRating Rate={item.rating} reviews={"Reviews:" + (item.reviews ? item.reviews.length : 'Now Reviews Yet')} />
                  </h6>
                </div>
                <h6>{item.description}</h6>
                <h4>{item.product_name}</h4>
                <div className="quantity-quantaty1" style={{ display: 'flex' }}>
                  <div className="increament-quintity">
                    <Button onClick={() => incrementQuantity(item)}>+</Button>
                  </div>
                  <div className="quantity-box">
                    <h3>{item.quantity}</h3>
                  </div>
                  <div className="decreament-quintity">
                    <Button onClick={() => decrementQuantity(item)}>-</Button>
                  </div>
                </div>
              </div>
              <div className="container-item-price">
                <h2>1/Price ${item.price} </h2>
                {IsAuthenticated || auth0IsAuthenticated ? (
                  <>
                    {orderSuccessfull ? (
                      <>
                        <center>
                          <div className="success-paymnet" style={{ width: 300, textAlign: 'center' }} >
                            <Lottie animationData={Successpaymen2} content={item.price} />
                          </div>
                        </center>

                        <div className="profile">
                          {auth0IsAuthenticated ? (
                            <> <img style={{ borderRadius: 50 }} src={auth0User.picture} alt="" />
                              <Button >Payed ${item.price}</Button>
                            </>
                          ) : (
                            <>
                              {IsAuthenticated ? (<>
                                <small>{Username.name}</small>
                                <Button >Payed ${item.price}</Button>
                              </>) : (<>


                              </>)}
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        {totalPrice != 0 ? (
                          <>
                            {/* <StripeCheckout
                              token={handleToken}
                              stripeKey="pk_test_51NsptqIZwaDy0r3Ko7bjAwarLWegDVKxSsSIDSrrG5NbYY6HeB9N4DuthpmrR9cnURXbccHmbABMhuGGGDmJhroN00fSaWhHyv"
                              amount={totalPrice * 100}
                              currency="PKR"
                              name={item.product_name}
                              description={item.description}
                              image={item.image_url}
                              _product_id={item._id}
                              // email={auth0User ? auth0User.email : Username.email}
                              email={(auth0User && auth0User.email) || (Username && Username.email)}
                              alipay={true}
                              locale="auto"
                              allowRememberMe={true}
                              // panelLabel={`Pay Now ${totalPrice * 100}`}
                            >
                              
                              <button onClick={() => setId(item._id)}>Pay Now</button>
                            </StripeCheckout> */}

                            <div className="checkout-container">
                              <StripeCheckout
                                token={handleToken}
                                stripeKey="pk_test_51NsptqIZwaDy0r3Ko7bjAwarLWegDVKxSsSIDSrrG5NbYY6HeB9N4DuthpmrR9cnURXbccHmbABMhuGGGDmJhroN00fSaWhHyv"
                                amount={totalPrice * 100}
                                currency="PKR"
                                name={item.product_name}
                                description={item.description}
                                image={item.image_url}
                                _product_id={item._id}
                                email={(auth0User && auth0User.email) || (Username && Username.email)}
                                alipay={true}
                                locale="auto"
                                allowRememberMe={true} shippingAddressCollection={{
                                  allowedCountries: ['US', 'CA'],
                                }}
                                billingAddressCollection="required"
                                shippingAddressOptions={{
                                  phone: true,
                                  name: 'auto',
                                  addressLine1: true,
                                  addressLine2: true,
                                  city: true,
                                  state: true,
                                  country: true,
                                  postalCode: true,
                                }}
                                className="custom-stripe-checkout"
                                opened={() => console.log("Checkout opened")} // Custom event handler when checkout is opened
                                closed={() => console.log("Checkout closed")} // Custom event handler when checkout is closed
                                panelLabel="Complete Payment" // Text on the payment button
                                zipCode={true} // Display the ZIP code field
                                bitcoin={true} // Enable Bitcoin as a payment option
                                // URL of the image to be displayed in the Checkout form
                                style={{
                                  width: '1000px', // Set your desired width
                                  height: '700px', // Set your desired height
                                  background: '#f8f8f8', // Set your desired background color
                                }}
                                shippingAddress={0}
                              >
                                <button onClick={() => setId(item._id)}>Pay Now</button>
                              </StripeCheckout>
                            </div>                 </>
                        ) : (
                          <>
                            <center>
                              <div className="nodatefound_cart" style={{ textAlign: 'center' }}>
                                <strong>No  Proudcts in Cart  </strong>
                                <Lottie animationData={NoProductData} />
                              </div>
                            </center>
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button>
                        <FontAwesomeIcon icon={faUser} />
                      </Button>
                    </Link>
                  </>
                )}
                <Button onClick={() => removeItem(item)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
                {showret ? <>
                  <small>for rating please  click down on rating button  to rate smae item </small>
                  <button onClick={() => { setId(item._id) }} >Rate</button>
                </> : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-product-sumis">
        {orderSuccessfull ? (
          <>
            <h2 style={{ textAlign: 'center' }}>  {auth0IsAuthenticated ? auth0User.name : Username.email}  Payed : $ {parseInt(totalPrice)}</h2>
          </>
        ) : (
          <>
            {totalPrice != 0 ? (
              <>
                <h2 style={{ textAlign: 'center' }}> Total: $ {parseInt(totalPrice)}</h2>
              </>
            ) : (
              <> </>
            )}
          </>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {IsAuthenticated || auth0IsAuthenticated ? (
        <>
          <div style={{ textAlign: 'center', padding: 20 }} className="pay-label">
            {orderSuccessfull && showRating ? (
              <>
                <center>
                  <div className="success-payment" style={{ width: 300, textAlign: 'center' }}>
                    <Lottie animationData={Successpaymen2} />
                  </div>
                  <div className="container-review-rating-product" style={{ width: 300 }}>
                    <h2>Gave Rating To Product</h2>
                    <input
                      type="text"
                      name="name"
                      placeholder={auth0User?.name || Username?.name}
                      value={rating_name}
                      onChange={handleName}
                    />
                    <select
                      name="rating"
                      value={rating_}
                      onChange={handleRate}
                    >
                      <option value={0}>Select Rating</option>
                      <option value={0.5}>Half Star &#9733;</option>
                      <option value={1}>&#9733;</option>
                      <option value={1.5}>&#9733;&#9733;</option>
                      <option value={2}>&#9733;&#9733;</option>
                      <option value={2.5}>&#9733;&#9733;&#9733;</option>
                      <option value={3}>&#9733;&#9733;&#9733;</option>
                      <option value={3.5}>&#9733;&#9733;&#9733;&#9733;</option>
                      <option value={4}>&#9733;&#9733;&#9733;&#9733;</option>
                      <option value={4.5}>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                      <option value={5}>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                    </select>
                    <textarea
                      name="comment"
                      id="rating"
                      placeholder='Comment '
                      value={comment}
                      onChange={handleComent}
                      cols="30"
                      rows="10"
                    ></textarea>
                    <button onClick={handleReviewSubmit}>Submit Review</button>
                  </div>

                </center>
              </>
            ) : (
              <>
                {totalPrice == 0 ? (
                  <>
                    <center>
                      <div className="nodatefound_cart" style={{ textAlign: 'center' }}>
                        <strong>No  Products in Cart  </strong>
                        <Lottie animationData={NoProductData} />
                      </div>
                    </center>
                  </>
                ) : (
                  <>

                    {orderSuccessfull ? (<>

                      <h2>Order Is successfull</h2>
                      <Lottie animationData={Successpaymen2} size={100} height={50} />
                    </>) : (<>

                      <StripeCheckout
                        token={handleToken}
                        stripeKey="pk_test_51NsptqIZwaDy0r3Ko7bjAwarLWegDVKxSsSIDSrrG5NbYY6HeB9N4DuthpmrR9cnURXbccHmbABMhuGGGDmJhroN00fSaWhHyv"
                        amount={totalPrice * 100}
                        currency="USD"
                        name="Your Store"
                        description="Purchase from Your Store"
                        email={(auth0User && auth0User.email) || (Username && Username.email)}
                        alipay={true}
                        locale="auto"
                        allowRememberMe={true}
                        billingAddress={true}
                        shippingAddressCollection={{
                          allowedCountries: ['US', 'CA'],
                        }}
                        billingAddressCollection="required"
                        shippingAddressOptions={{
                          phone: true,
                          name: 'auto',
                          addressLine1: true,
                          addressLine2: true,
                          city: true,
                          state: true,
                          country: true,
                          postalCode: true,
                        }}
                        opened={() => console.log("Checkout opened")} //   className="custom-stripe-checkout"
                        Custom event handler when checkout is opened
                        closed={() => console.log("Checkout closed")} // Custom event handler when checkout is closed
                        panelLabel="Complete Payment" // Text on the payment button
                        zipCode={true} // Display the ZIP code field
                        bitcoin={true} // Enable Bitcoin as a payment option
                        image='/Images/banners.jpg' // URL of the image to be displayed in the Checkout form
                        style={{
                          width: '1000px', // Set your desired width
                          height: '700px', // Set your desired height
                          background: '#f8f8f8', // Set your desired background color
                        }}
                        shippingAddress={handleShippingAddress}
                      >
                        <div className="custom-checkout-form">
                          <div className="custom-checkout-button" >
                            <button style={{ color: 'red', width: 200, background: 'green' }}>CheckOut</button>
                          </div>
                          {/* Add Free Shipping Option */}
                          <div className="custom-free-shipping-option">
                          </div>
                        </div>
                      </StripeCheckout>
                    </>)}
                  </>
                )}
              </>
            )}
          </div>
        </>
      ) : (
        <>
          {totalPrice === 0 ? (
            <>

              <h2 style={{ textAlign: 'center' }}> no item found in card </h2>
          <div className="add_to_cart_button"  style={{textAlign:'center', marginTop:23}} >
          <Button variant="secondary" size="lg" onClick={()=>location.href='/'}>
             Back
        </Button>
          </div>
            </>
          ) : (
            <>
              <div className="continous-login" style={{ textAlign: 'center' }}>
                <Link to={'/login'}>  <Button>To Process Please Login </Button></Link>
              </div>
            </>
          )}
          <div className="same_name_products">
            {totalPrice === 0 ? (<>
            </>) : (<>
              <h2 style={{ textAlign: 'center', marginTop: 100 }}>You May Like This </h2>
              {orderSuccessfull ? (<>
                {myallproduct
                  .filter(item => Products.some(product => product.category === item.category))
                  .map((cart_data, index) => (
                    <div key={index}>
                      <h2>{cart_data.product_name}</h2>
                    </div>
                  ))}
              </>) : (<>
              </>)}
            </>)}
          </div>
        </>
      )}
      
      
       </>)}
     
    </>
  );
};

export default Bag;



























