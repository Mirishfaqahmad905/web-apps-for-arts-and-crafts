import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllData from '../Json/All.json';
import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { add } from "./components/Store/createSlice";
import { Router } from "express";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [isAnimated, setAnimated] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleSearchClick = () => {
    // Filter data based on the query (matching the beginning of product names)
    const filteredData = AllData.filter((product) =>
       
      product.product_name && product.product_name.toLowerCase().startsWith(query.toLowerCase())
    );
    setSearchedData(filteredData);
    setShowSearchResults(true);
  };

  const OrderItem = (item) => {
    if (dispatch(add(item))) {
      console.log('added');

      toast.success('Item added to cart!', {
        position: 'top-right',
        autoClose: 200, // You can adjust the duration for this specific toast if needed
      });
    } else {
      toast.error('item not added', {
        position: 'top-left',
        autoClose: 200,
      });
    }
  };

  return (
    <>
      <div className="my_search_bar_here">
        <div className={`search_and_logo ${isAnimated ? "animated" : ""}`}>
          <div className="header-logo-eco">
            <div className="logo-header-search-bars">
              <img src="./Pashton/logo.png" alt="Your Logo" />
            </div>
          </div>
          <div className="search_button_header">
            <input
              style={{ width: 400 }}
              type="text"
              placeholder="Search..."
              className="search_input_field"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button className="search_button" onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearch} />
              Search
            </button>
          </div>
        </div>
        <div className="search_data_here">
          {showSearchResults ? (   
            searchedData.length === 0 ? (
              <div class="alert alert-primary mt-4 p-4 text-center " role="alert">
                <h4> No Data Found Sorry try To Write Correct Name  </h4>
                <button onClick={()=>navigate(-1)} >Back </button>
              </div>
            ) : (
              <>
                {searchedData.map((item, index) => (
                  <MDBRow className="justify-content-center mb-0" key={index}>
                    <MDBCol md="12" xl="10">
                      <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                              <MDBRipple
                                rippleColor="light"
                                rippleTag="div"
                                className="bg-image rounded hover-zoom hover-overlay"
                              >
                                <MDBCardImage
                                  src={item.image}
                                  fluid
                                  className="w-100"
                                />
                                <a href="#!">
                                  <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                  ></div>
                                </a>
                              </MDBRipple>
                            </MDBCol>
                            <MDBCol md="6">
                              <h5>{item.product_name}</h5>
                              <div className="d-flex flex-row">
                                <div className="text-danger mb-1 me-2">
                                  <MDBIcon icon="star" />
                                  <MDBIcon icon="star" />
                                  <MDBIcon icon="star" />
                                  <MDBIcon icon="star" />
                                </div>
                                <span>Rating </span>
                              </div>
                              <div className="mt-1 mb-0 text-muted small">
                                <span>100% cotton</span>
                                <span className="text-primary"> • </span>
                                <span>Light weight</span>
                                <span className="text-primary"> • </span>
                                <span>
                                  Best finish
                                  <br />
                                </span>
                              </div>
                              <div className="mb-2 text-muted small">
                                <span>Unique design</span>
                                <span className="text-primary"> • </span>
                                <span>{item.category}</span>
                                <span className="text-primary"> • </span>
                                <span>
                                  {item.review}
                                  <br />
                                </span>
                              </div>
                              <p className="text-truncate mb-4 mb-md-0">
                                {item.description}
                              </p>
                            </MDBCol>
                            <MDBCol
                              md="6"
                              lg="3"
                              className="border-sm-start-none border-start"
                            >
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">${item.price}</h4>
                                <span className="text-danger">
                                  <s>{item.price}</s>
                                </span>
                              </div>
                              <h6 className="text-success">Free shipping</h6>
                              <div className="d-flex flex-column mt-4">
                                <Button onClick={() => OrderItem(item)} color="primary" size="sm">
                                  Add to cart
                                </Button>
                             
                                <Button outline color="info" size="sm" className="mt-2">
                                  Go To Cart
                                </Button>
                                <button onClick={()=>navigate(-1)} >Back </button>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                   
                  </MDBRow>
                ))}
              </>
            )
          ) : (
            <>
              {/* Your other components here */}
            </>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={300} hideProgressBar={false} />
    </>
  );
};

export default Search;

















 // const handleToken = async (token) => {
  //   try {
  //     // Send the order data to the server
  //     const orderData = {
  //       token: token.id,
  //       PaymentMethod: token.card.brand,
  //       lastfourdigit: token.card.last4,
  //       products: Products, // Assuming Products contains the list of ordered items
  //       totalPrice: totalPrice,
  //       // Add any other relevant order data here
  //     };
  
  //     const response = await fetch('http://localhost:30001/order', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(orderData),
  //     });
  
  //     if (response.ok) {
  //       // Order was successfully placed
  //       console.log('Order placed successfully.');
  
  //       // Set successfull state to true
  //       setSuccessfull(true);
  
  //       Swal.fire(
  //         `Hello ${auth0User.name}`,
  //         `Your payment process was successful`,
  //         'Congratulations'
  //       );
  
  //       // You can also display a success message to the user if needed.
  //     } else {
  //       // Handle errors if the order couldn't be placed
  //       console.error('Error placing the order.');
  
  //       // Set successfull state to false
  //       setSuccessfull(false);
  
  //       // You can display an error message to the user.
  //     }
  
  //     // Payment data
  //     const paymentData = {
  //       address_city: null, // Example: req.body.address_city,
  //       address_country: null, // Example: req.body.address_country,
  //       address_line1: null, // Example: req.body.address_line1,
  //       address_line1_check: null, // Example: req.body.address_line1_check,
  //       address_line2: null, // Example: req.body.address_line2,
  //       address_state: null, // Example: req.body.address_state,
  //       address_zip: null, // Example: req.body.address_zip,
  //       address_zip_check: null, // Example: req.body.address_zip_check,
  //       brand: token.card.brand, // Example: token.card.brand,
  //       country: null, // Example: req.body.country,
  //       cvc_check: null, // Example: req.body.cvc_check,
  //       dynamic_last4: null, // Example: req.body.dynamic_last4,
  //       exp_month: token.card.exp_month, // Example: token.card.exp_month,
  //       exp_year: token.card.exp_year, // Example: token.card.exp_year,
  //       funding: token.card.funding, // Example: token.card.funding,
  //       id: token.id, // Example: token.id,
  //       last4: token.card.last4, // Example: token.card.last4,
  //       name: null, // Example: req.body.name,
  //       object: token.card.object, // Example: token.card.object,
  //       tokenization_method: null, // Example: req.body.tokenization_method,
  //       wallet: null, // Example: req.body.wallet,
  //     };
      
  
  //     // Send a POST request to the server with payment data
  //     const responseanother = await fetch('http://localhost:3001/payment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(paymentData),
  //     });
  
  //     if (responseanother.ok) {
  //       console.log('Payment data stored successfully.');
  //       window.alert('Payment data stored successfully.');
  //     } else {
  //       console.error('Error storing payment data.');
  //       window.alert('Error storing payment data.');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };



















