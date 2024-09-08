import React from 'react';
import '../Css/Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
     const navigate=useNavigate();
  return (
    <div>
<div>
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="footer-heading">E-comerece For Traditional Arts And Crafts</h4>
                        <div className="footer-underline"></div>
                        <p>
                             in this plateform you can buy all tradational product what ever you  want you can buy.
                             we are only sell there is no option for bussinesman to sell product 
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Visit</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><a href="" className="text-white" onClick={()=>navigate(-1)}>Home</a></div>
                        <div className="mb-2"><a href="" className="text-white">About Us</a></div>
                        <div className="mb-2"><a href="" className="text-white">Contact Us</a></div>
                        <div className="mb-2"><a href="" className="text-white">Blogs</a></div>
                        <div className="mb-2"><a href="" className="text-white">Sitemaps</a></div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Shop Now</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><a href="" className="text-white">Collections</a></div>
                        <div className="mb-2"><a href="" className="text-white">Trending Products</a></div>
                        <div className="mb-2"><a href="" className="text-white">New Arrivals Products</a></div>
                        <div className="mb-2"><a href="" className="text-white">Featured Products</a></div>
                        <div className="mb-2"><a href="" className="text-white">Cart</a></div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Reach Us</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2">
                            <p>
                                <i className="fa fa-map-marker"></i> Lower Dir Munda Qila ,  city zip code ,  18500
                            </p>
                        </div>
                        <div className="mb-2">
                            <a href="" className="text-white">
                                <i className="fa fa-phone"></i> +923070121271
                            </a>
                        </div>
                        <div className="mb-2">
                            <a href="" className="text-white">
                                <i className="fa fa-envelope"></i> techhub905@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p className=""> &copy;  {new Date().getFullYear()}  Ecommerce For Traditional Arts And crafts . All rights reserved.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="social-media">
                             <h4>Get Connected:</h4>
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-instagram"></i></a>
                            <a href=""><i className="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer