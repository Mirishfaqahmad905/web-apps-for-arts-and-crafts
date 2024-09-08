// import React, { useState ,useEffect} from "react";
// import { BrowserRouter, Link, Route, Router } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Product from "./components/Product";
// import axios from "axios";



// import "./Css/Search_bar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import NoDatafound from './assets/Ndatafound.json';
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
// import Bag from "./components/Bag";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Lottie from "lottie-react";
//  import  animationData from './assets/searching.json';
// import Navbar from "./Navbar";
// import Footer from "./components/Footer";
// import Signup from "./components/Signup";
// import Contact from "./components/Contact";
// import './Css/e-commerce-category.css';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import { Provider} from "react-redux";
// import{ useDispatch }from 'react-redux';
// // import { UseSelector } from "react-redux";
// import store from './components/Store/Store'
// import { HashLoader } from 'react-spinners';
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBIcon,
//   MDBRipple,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import { add } from "./components/Store/createSlice";
// import AddProduct from "./components/Add_product";



// function App() {
//    const [fetchedData,setFetchedData]=useState([]);


//    const GetAllData = async () => {
//     try {
//       const alldatais = await axios.get('http://localhost:30001/getallData');
// setFetchedData(alldatais.data.message);
//       console.log(alldatais.data.message);
//     } catch (err) {
//       console.log('Error occurred: ', err);
//     }
//   };

//   useEffect(() => {
//     GetAllData();
//   }, []);











//   const [isAnimated, setAnimated] = useState(false);
//   const [query, setQuery] = useState("");
//   const [searchedData, setSearchedData] = useState([]);
//   const [showSearchResults, setShowSearchResults] = useState(false);
//   const [Loader,setLoader]=useState(true);





//   const handleSearchClick = () => {
//     // Filter data based on the query (matching the beginning of product names)

//     const filteredData = fetchedData.filter((product) =>

//     product.product_name.toLowerCase().includes(query.toLowerCase())
//     );
//     setSearchedData(filteredData);
//     setShowSearchResults(true);
//   };




//    const dispatch=useDispatch();
//  const   OrderItem=(item)=>{

//       dispatch(add({item}))

//       toast.success('Item added to cart!', {
//         position: 'top-right',
//         autoClose: 200, // You can adjust the duration for this specific toast if needed

//       });       


//       useEffect(() => {
//         setTimeout(() => {
//           setLoader(false);
//         }, 2000);
//       }, []);



//      // Show a success toast notification









//  }
//   return (
//     <>


//      <div className="my_search_bar_here width_is_here" >
//         <div className={`search_and_logo ${isAnimated ? "animated" : ""}`}>
//           <div className="header-logo-eco">
//             <div className="logo-header-search-bars">
//               <img src="./Pashton/logo.png" alt="Your Logo" />
//             </div>
//           </div>
//           <div className="search_button_header">
//             <input
//               style={{ width: 500 }}
//               type="text"
//               placeholder="Search..."
//               className="search_input_field"
//               onChange={(e) => setQuery(e.target.value)}
//               value={query}
//             />
//             <button className="search_button" onClick={handleSearchClick}>
//               {/* <FontAwesomeIcon icon={faSearch} /> */}
//                <Lottie    animationData={animationData} width={200} height={200} className="animdationSearching"  />
//             </button>
//           </div>
//         </div>
//         <div className="search_data_here">
//           {showSearchResults ? (
//             searchedData.length === 0 ? (
//               <div class="alert alert-primary mt-4 p-4 text-center " role="alert">
//  {/* <h4> No Data Found Sorry try To Write Correct Name  </h4> */}
//   <Lottie  animationData={NoDatafound}    className="NoDatafoundanimationLottie"/>
// </div>
//             ) : (
//               <>
//              {searchedData.map((item) => (
//            <MDBRow className="justify-content-center mb-0">
//         <MDBCol md="12" xl="10">
//           <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
//             <MDBCardBody>
//               <MDBRow>
//                 <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
//                   <MDBRipple
//                     rippleColor="light"
//                     rippleTag="div"
//                     className="bg-image rounded hover-zoom hover-overlay"
//                   >
//                     <MDBCardImage
//                       src={item.image_url}
//                       fluid
//                       className="w-100"
//                     />
//                     <a href="#!">
//                       <div
//                         className="mask"
//                         style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//                       ></div>
//                     </a>
//                   </MDBRipple>
//                 </MDBCol>
//                 <MDBCol md="6">
//                   <h5>{item.product_name}</h5>
//                   <div className="d-flex flex-row">
//                     <div className="text-danger mb-1 me-2">
//                       <MDBIcon  icon="star" />
//                       <MDBIcon  icon="star" />
//                       <MDBIcon  icon="star" />
//                       <MDBIcon  icon="star" />
//                     </div>
//                     <span>Rating </span>
//                   </div>
//                   <div className="mt-1 mb-0 text-muted small">
//                     <span>100% cotton</span>
//                     <span className="text-primary"> • </span>
//                     <span>Light weight</span>
//                     <span className="text-primary"> • </span>
//                     <span>
//                       Best finish
//                       <br />
//                     </span>
//                   </div>
//                   <div className="mb-2 text-muted small">
//                     <span>Unique design</span>
//                     <span className="text-primary"> • </span>
//                     <span>{item.category}</span>
//                     <span className="text-primary"> • </span>
//                     <span>
//                        {item.review}
//                       <br />
//                     </span>
//                   </div>
//                   <p className="text-truncate mb-4 mb-md-0">
//                     {item.description}
//                   </p>
//                 </MDBCol>
//                 <MDBCol
//                   md="6"
//                   lg="3"
//                   className="border-sm-start-none border-start"
//                 >
//                   <div className="d-flex flex-row align-items-center mb-1">
//                     <h4 className="mb-1 me-1">${item.price}</h4>
//                     <span className="text-danger">
//                       <s>{item.price}</s>
//                     </span>
//                   </div>
//                   <h6 className="text-success">Free shipping</h6>
//                   <div className="d-flex flex-column mt-4">
//                   <Button onClick={()=>OrderItem(item)} color="primary" size="sm">
//   Add to cart
// </Button>
//                     <Button outline color="primary" size="sm" className="mt-2">
//                       Add to wish list
//                     </Button>

//                {/* <Button   outline color="info" size="sm" className="mt-2">

//                     </Button>  */}
//               <Button onClick={() => window.location.href = '/bag'}>Bag</Button>



//                   </div>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//           ))}
//               </>
//             )
//           ) 
//           : (
//             <>

//         <BrowserRouter>

//                 <Navbar />
//                 <Router>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/product" element={<Product />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/logout" element={<Logout />} />
//                   <Route path="/bag" element={<Bag/>} />
//                   <Route path="/signup" element={<Signup />} />
//                   <Route path="/contact" element={<Contact />} />
//                    <Route path="/addproduct" element={<AddProduct/>}/>
//                 </Router>
//                 <Footer />

//               </BrowserRouter>

//             </>
//           )}
//         </div>
//       </div>
//       <ToastContainer position="top-right" autoClose={300} hideProgressBar={false} />  





//     </>
//   );
// }

// export default App;
































import  { useState, useEffect } from "react";
import { BrowserRouter,  Routes ,Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import { useDispatch } from 'react-redux';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBIcon, MDBRipple, MDBBtn } from "mdb-react-ui-kit";
import { add } from "./components/Store/createSlice";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Bag from "./components/Bag";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import AddProduct from "./components/Add_product";
import "./Css/Search_bar.css";
import NoDatafound from './assets/Ndatafound.json';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';

import './Css/e-commerce-category.css';
import './Css/Search_bar.css';
import Swal from 'sweetalert2';

import animationData from './assets/searching.json';
import Admin from "./components/Admin";
import Admin_dash from "./components/Admin_dash";
import User_dashboard from "./components/User_dashboard";

import {  MagnifyingGlass } from 'react-loader-spinner'; // Replace 'react-preloaders' with the actual library name
import Mens from "./components/Categories/Mens";
import Women from "./components/Categories/Women";
import Tech from "./components/Categories/Tech";
import Others from "./components/Categories/Others";
import ArtsAndcrafts from "./components/Categories/ArtsAndcrafts";
import Fashion from "./components/Categories/Fashion";
import Blogs from "./components/Blogs";
import Checkout from "./components/Checkout";
import Hujra from "./blogscomponents/Hujra";
import NationalDay from "./blogscomponents/NationalDay";
import TradatioNalfoods from "./blogscomponents/TradionalFoods";
import Gamkhdi from "./blogscomponents/Gamkhdi";
import PashtonSkills from "./blogscomponents/PashtonSkills";
import Attan from "./blogscomponents/Attan";
import Wedding from "./blogscomponents/Wedding";
function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [isAnimated, setAnimated] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [loader, setLoader] = useState(false);

 // apply favicon on url 
  useEffect(()=>{
      const faveicon=document.getElementById('favicon');
      if(faveicon){
         faveicon.href="https://w7.pngwing.com/pngs/996/501/png-transparent-shopping-cart-caddy-ecommerce-store-3d-icon-thumbnail.png";
      }
  },[])
  useEffect(() => {
    GetAllData();
  }, []);

  const GetAllData = async () => {
    try {
      const alldatais = await axios.get('http://localhost:30001/getallData');
      setFetchedData(alldatais.data.message);
    } catch (err) {
      console.log('Error occurred: ', err);
    }
  };

  // const handleSearchClick = () => {


  // if(!query){


  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //     footer: '<a href="">Why do I have this issue?</a>'
  //   })
  //     return;
  // }

  //   const filteredData = fetchedData.filter((product) =>
  //     product.product_name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setSearchedData(filteredData);
  //   setShowSearchResults(true);
  // };



  const handleSearchClick = () => {
    setLoader(true); // Show the loader

    if (!query) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
      setLoader(false); // Hide the loader due to an error
      return;
    }

    const filteredData = fetchedData.filter((product) =>
      product.product_name && product.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedData(filteredData);
    setShowSearchResults(true);

    // Simulate a 2-second loading delay
    setTimeout(() => {
      setLoader(false); // Hide the loader after 2 seconds
    }, 2000);
  };


  const dispatch = useDispatch();
  const OrderItem = (item) => {
    dispatch(add(item));
    toast.success(`${item.product_name} added to cart`, {
      position: 'top-right',
      autoClose: 200,
    });


    setTimeout(() => {

      setLoader(false);
    }, 2000);
  };

  return (

    <BrowserRouter>

      {loader ? (<>

        {/* <Bars
 height="200"
 width="200"
 color="#FFCC00"
 ariaLabel="bars-loading"
 wrapperStyle={{}}
 wrapperClass=""
 visible={true}
/> */}
        <MagnifyingGlass
          visible={true}
          height="200"
          width="300"
          ariaLabel="MagnifyingGlass-loading"
          // wrapperStyle={{backgroundColor: 'white', padding: '10px'}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor='#c0efff'
          color='#E50914'
        />
      </>) : (<>


        <div className="my_search_bar_here width_is_here">
          {/* Search bar and logo */}
          <div className={`search_and_logo ${isAnimated ? "animated" : ""}`}>
            <div className="header-logo-eco">
              <div className="logo-header-search-bars">
                <img src="./Pashton/logo.png" alt="Your Logo" />
              </div>
            </div>
            <div className="search_button_header">
              <input
                style={{ width: 500 }}
                type="text"
                placeholder="Search..."
                className="search_input_field"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <button className="search_button" onClick={handleSearchClick}>
                <Lottie animationData={animationData} width={200} height={200} className="animdationSearching" />
              </button>
            </div>
          </div>
          <div className="search_data_here">
            {showSearchResults ? (
              searchedData.length === 0 ? (
                <div  className="alert alert-primary mt-4 p-4 text-center " role="alert">
                  <Lottie style={{width:600, marginLeft:300, height:600,textAlign:'center'} }  animationData={NoDatafound} className="NoDatafoundanimationLottie" />
                   <Button className="button"   onClick={()=>window.location.href='/'}>Go Back</Button>
               
                </div>
              ) : (
                searchedData.map((item) => (
                  <MDBRow className="justify-content-center mb-0" key={item._id}>
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
                                  src={item.image_url}
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
                                <span>Rating</span>
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
                                  <s>${item.price}</s>
                                </span>
                              </div>
                              <h6 className="text-success">Free shipping</h6>
                              <div className="d-flex flex-column mt-4">
                                <Button onClick={() => OrderItem(item)} color="primary" size="sm">
                                  Add to cart
                                </Button>
                                {/* <Button outline color="primary" size="sm" className="mt-2">
                                  Add to wish list
                                </Button> */}
                                <Button onClick={() => window.location.href = '/bag'}>Bag</Button>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                ))
              )
            ) : (
              <>
                <Navbar />
             
               <Routes>
          
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/bag" element={<Bag />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/addproduct" element={<AddProduct />} />
                  <Route path="/Admin" element={<Admin />} />
                  <Route path='/dashboard' element={<Admin_dash />} />
                  <Route path='/user_dashboard' element={<User_dashboard />} />
                  <Route path="/mens" element={<Mens />} />
                  <Route path="/womens" element={<Women />} />
                  <Route path="Tech" element={<Tech />} />
                  <Route path="others" element={<Others />} />
                  <Route path="/Art&crafts" element={<ArtsAndcrafts />} />
                  <Route path="/fashion" element={<Fashion />} />
                  <Route path="/Blogs" element={<Blogs/>}/>
                  <Route path="/Checkout" element={<Checkout/>}/>
                  <Route path="/Hujra" element={<Hujra/>}/>
                  <Route path="/nationalday" element={<NationalDay/>}/>
                  <Route path="/tradationalfoods" element={<TradatioNalfoods/>} />
                  <Route path="/ghamkhadi" element={<Gamkhdi/>}/>
                  <Route path="/pashtonSkill" element={<PashtonSkills/>}/>
                   <Route path="/Attan" element={<Attan/>}/>
                   <Route path="/Wedding" element={<Wedding/>}/> 

                   
                  
                </Routes>
               
                <Footer />
              </>
            )}
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={300} hideProgressBar={false} />
      </>)}
 <div>
 <link id="favicon" rel="shortcut icon" type="image/x-icon" href="https://w7.pngwing.com/pngs/996/501/png-transparent-shopping-cart-caddy-ecommerce-store-3d-icon-thumbnail.png" />
 </div>
    </BrowserRouter>
  );
}

export default App;
