import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Lottie from 'lottie-react';
import ShopingCart from './assets/shopingcart.json';
import Animdation from './assets/ecom_log.json';
import Loginanimation from './assets/login_se2.json';
import './Css/Navbar.css';
import { useSelector, useDispatch } from "react-redux";
import { AdminLogout, logoutFun } from "./components/Store/authReducer";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const Username = useSelector((state) => state.auth.user);
  const { logout, isAuthenticated: auth0IsAuthenticated, user: auth0User } = useAuth0();
  const [cartData, setCartData] = useState(0);
  const itemData = useSelector((state) => state.cart);
  const isAdminLogin = useSelector((state) => state.auth.adminLoginState);
  const AdminName = useSelector((state) => state.auth.adminUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutFun());
  }
  return (
    <div className="navbar_pages_uper_me writeuniquescssfor" style={{}}>
      <nav className="navbarr">
        <div className="navbar__logo">
          <Link to="/">
            <Lottie animationData={Animdation} className="navbar__lottie-animation" />
          </Link>
        </div>
        <ul className="navbar__links">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to={'/'} className="navbar__link" >Shop</Link>
          </li> */}
          <li>
            <Link to={'/Blogs'} className="navbar__link" >Blogs</Link>
          </li>
          <li className="navbar__item dropdownites dropdown">
            <Link to="/product" className="navbar__link" >
              Products
            </Link>
            {/* <div className="dropdown-content">
              <Link to="/category1">Men</Link>
              <Link to="/category2">Women:</Link>
              <Link to="/category3">Children</Link>
              <Link to="/category1">Pashton Cultural</Link>
            </div> */}
          </li>
          <li className="navbar__item dropdown dropdownites">
            <Link to="/mens" className="navbar__link ">
              Categories
            </Link>
            <div className="dropdown-content">
              <Link to="/mens">Mens</Link>
              <Link to="/Womens">Womens:</Link>
              <Link to="/Tech">Technology</Link>
              <Link to="/Art&crafts">Art&crafts</Link>
              <Link to="/fashion">Fashion</Link>
              <Link to="/others">others</Link>
            </div>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link">
              Contact
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
        </ul>
        <div className="navbar__user">
          {isAuthenticated || auth0IsAuthenticated || isAdminLogin ? (
            <>
              <Link to="/logout" className="navbar__profile-icon">
                {isAdminLogin ? (<>
                  <li style={{ listStyle: "none" }} className="navbar__item dropdown dropdownites">
                    <Link to="#" className="navbar__login ">
                      <h6 style={{ color: "black" }}>{AdminName.Admin_name}</h6>
                    </Link>
                    <div className="dropdown-content navbar__item dropdown ">
                      <Link to="/dashboard">DashBoard</Link>
                      {/* Uncomment and correct the code below */}
                      <Link to=""><Button onClick={() => dispatch(AdminLogout())}>Logout</Button></Link>
                    </div>
                  </li>
                </>) : (<>
                  {auth0IsAuthenticated ? (
                    <>
                      <div className="navbar-avatar-image" >
                        {/* <img src={auth0User.picture} alt="User-Profile-avatar-google" style={{ borderRadius: 50 }} /> */}
                        <li className="navbar__item dropdownites dropdown">
                          <Link to="@" className="navbar__link">
                            <img src={auth0User.picture} alt="User-Profile-avatar-google" style={{ borderRadius: 50 }} />
                          </Link>
                          <div className="dropdown-content">
                            <Link to="/user_dashboard">Dashboard</Link>
                            <Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link>
                          </div>
                        </li>
                        {/* <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button> */}
                      </div>
                    </>
                  ) : (
                    <>
                      <p>{Username.name}</p>
                      <div className=""  >
                        {/* <img src={auth0User.picture} alt="User-Profile-avatar-google" style={{ borderRadius: 50 }} /> */}
                        <li className="navbar__item dropdownites dropdown">

                          <div className="dropdown-content" >
                            <Link to="/user_dashboard">Dashboard</Link>
                            {/* <Link onClick={()=>dispatch()}>Logout</Link> */}
                          </div>
                        </li>
                        {/* <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button> */}
                      </div>
                    </>
                  )}
                </>)}
              </Link>
            </>
          ) : (
            <>
              <li style={{ listStyle: "none" }} className="navbar__item dropdown dropdownites">
                <Link to="/login" className="navbar__login">
                  <Lottie animationData={Loginanimation} className="login_animation" />
                </Link>
                <div className="dropdown-content navbar__item dropdown ">
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Register </Link>
                  <Link to="/Admin">Login as admin  </Link>
                  {/* <Link to={'/Checkout'}>Checkout</Link> */}
                </div>
              </li>
            </>
          )}
          {isAuthenticated ? (<>
            {/* <Button onClick={() => dispatch(logoutFun())}>Logout  </Button> */}
          </>) : (<>
          </>)}
          <Link to="/bag" className="navbar__bag-icon">
            <div className="counter-color-red">
              <span className="cart-icon">
                <Lottie animationData={ShopingCart} className="shoping_cart_animation" />
              </span>
              <span className="count">{itemData.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
