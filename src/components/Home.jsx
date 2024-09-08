import React, { useEffect, useState } from 'react';
import '../Css/Home.css'
import data from '../Json/Pashton.json';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ToastContainer, toast } from 'react-toastify';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; // Import the CSS for styles
import axios from 'axios';
import {
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import HomeRating from './HomeRating';
// import Pashton from '../Json/Pashton.json';
//  import AiFillStar from '@fortawesome/react-fontawesome';
import stars from 'react-rating-stars-component';
import Rating from 'react-rating-stars-component';
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import CardsData from './Cards';
import { useDispatch } from 'react-redux';
import { add } from './Store/createSlice';
import { HashLoader } from 'react-spinners';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const [visibalProduct, setVisibaleProduct] = useState(5);
  const [newproduct, setNewProduct] = useState([]);
  const { user } = useAuth0();
  console.log(user);
  // Rest of your component JSX
  const dispatch = useDispatch();
  const OrderNow = (item) => {
    dispatch(add(item));
    toast.success('Item added to cart!', {
      position: 'top-center',

      autoClose: 200, // You can adjust the duration for this specific toast if needed
    });
  }
  const Latest = (product) => {
    dispatch(add(product));
    toast.success('Item added to cart!', {
      position: 'top-right',
      autoClose: 200, // You can adjust the duration for this specific toast if needed
    });
  }
  // getting data from all.json


  const GetAllData = async () => {
    try {
      const alldatais = await axios.get('http://localhost:30001/getallData');
      setNewProduct(alldatais.data.message);
      console.log("data is " + alldatais.data.message);
    } catch (err) {
      console.log('Error occurred: ', err);
    }
  };
  useEffect(() => {
    GetAllData();
  }, []);

  return (
    <>


      {

      }

      <ToastContainer position="top-right" autoClose={300} hideProgressBar={false} />
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ width: 300, height: 440 }} src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="custom-carousel-content">
                <h1>
                  <span>Best Ecommerce Solutions 1 </span>
                  to Boost your Brand Name &amp; Sales
                </h1>
                <p>
                  We offer an industry-driven and successful digital marketing strategy that helps our clients in achieving a strong online presence and maximum company profit.
                </p>
                <div>
                  <a href="#" className="btn btn-slider">
                    Get Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./Images/c3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="custom-carousel-content">
                <h1>
                  <span>Best Ecommerce Solutions 2 </span>
                  to Boost your Brand Name &amp; Sales
                </h1>
                <p>
                  We offer an industry-driven and successful digital marketing strategy that helps our clients in achieving a strong online presence and maximum company profit.
                </p>
                <div>
                  <a href="#" className="btn btn-slider">
                    Get Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img height={300} src="https://images.pexels.com/photos/16675632/pexels-photo-16675632/free-photo-of-shoper-website-opened-on-the-computer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="custom-carousel-content">
                <h1>
                  <span>Best Ecommerce Solutions 3 </span>
                  to Boost your Brand Name &amp; Sales
                </h1>
                <p>
                  Cultivating a thriving online presence and maximizing profitability are at the core of our expertise. Our digital marketing strategy is tailored to elevate your brand's visibility and profitability in today's competitive digital landscape.
                </p>
                <div>
                  <a href="#" className="btn btn-slider">
                    Get Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img height={300} src="https://img.freepik.com/premium-photo/blue-street-houses-chefchaouen-morocco_333900-6776.jpg?w=740" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="custom-carousel-content">
                <h1>
                  <span>Best Ecommerce Solutions 3 </span>
                  to Boost your Brand Name &amp; Sales
                </h1>
                <p>
                  Cultivating a thriving online presence and maximizing profitability are at the core of our expertise. Our digital marketing strategy is tailored to elevate your brand's visibility and profitability in today's competitive digital landscape.
                </p>
                <div>
                  <a href="#" className="btn btn-slider">
                    Get Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img height={300} src=" https://img.freepik.com/free-photo/shocked-european-child-posing-after-shopping-kid-holding-store-bags-with-mouth-open_197531-14401.jpg?w=740&t=st=1697558156~exp=1697558756~hmac=ecd93685fc2e3ba16c7b4b600fb8c5ae31c827a18ef586f4088bb08dac3f3dbb" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="custom-carousel-content">
                <h1>
                  <span>Best Ecommerce Solutions 3 </span>
                  to Boost your Brand Name &amp; Sales
                </h1>
                <p>
                  Cultivating a thriving online presence and maximizing profitability are at the core of our expertise. Our digital marketing strategy is tailored to elevate your brand's visibility and profitability in today's competitive digital landscape.
                </p>
                <div>
                  <a href="#" className="btn btn-slider">
                    Get Now
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          eslint-disable-next-line react/no-unknown-property
          <span className="carousel-control-next-iscon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="trending-selling-product-list">
        <h1> Top Trending Selling Products</h1>
      </div>
      <div className="latest-product-trend">
        <div className="product-container">
    
          {newproduct.filter(item => item.category === 'cultural' || item.category == 'women' || item.category === 'Art').slice(1, visibalProduct).map((product, index) => (
            // eslint-disable-next-line react/jsx-key
            <Card className='card-new-arrival' style={{ width: '18rem' }}>
              <Card.Img variant="top" className='card-new-image' style={{ height: 300 }} src={product.image_url} />
              <Card.Body>
                <Card.Title className='card-new-image'>{product.product_name}</Card.Title>

                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>

                  <div className="container" style={{ textAlign: 'center' }}>
                    <HomeRating Rate={product.rating} />
                  </div>
                </Card.Text>

                <Button variant="success" style={{ color: 'white', fontWeight: 'bolder' }} onClick={() => Latest(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>




          ))}


        </div>
        <center> <div style={{ textAlign: 'center' }}> <Button onClick={() => setVisibaleProduct((previsourProduct) => previsourProduct + 5)} style={{ textAlign: 'center' }}>Load More </Button></div></center>
      </div>

      <div className="header-new-arrival-productss" style={{ textAlign: 'center' }}>
        <h4 style={{ textAlign: 'center' }}> Others New Arrival Products </h4>
      </div>
      <div className="ecomer-cards-container-newarrival">
        {newproduct
          .filter(item => item.category === 'Art' || item.category === 'Electronics' || item.category === 'fashion')
          .map((item, index) => (
            <Card className='card-new-arrival' style={{ width: '18rem' }} key={index}>
              <Card.Img variant="top" className='card
              -new-image' src={item.image_url} />
              <Card.Body>
                <Card.Title className='card-new-image'>{item.product_name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  {/* Rating: {item.rating} */}
                  <div className='margin_left_rating' > <HomeRating Rate={item.rating} _Id={item._id} /></div>
                  <Button variant="info" style={{ color: 'black', float: 'left' }} onClick={() => OrderNow(item)}>AddtoCart</Button>
                </Card.Text>
                {/* <h2>    <h2><HomeRating stars={product.rating} /></h2></h2> */}

              </Card.Body>
            </Card>
          ))}
      </div>
      <div className="poster-bottom">
        <Card className="poster-list-cards">
          <Card.Img variant="top" src="./Images/banners2.jpg" />
          <Card.Body>
            <Card.Text>
              Believe in the Power of Your Dreams and Shop Your Way to Success.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="container-upcomming-products">

        <h4 className="mt-4 mb-5" style={{ textAlign: 'center' }}>
          <strong style={{ background: 'black', color: 'white', padding: '30', fontSize: 40 }}> Gallry of papular pashton Culturals Items  </strong>
        </h4>
      </div> */
      <MDBRow>
        {newproduct.filter(item => item.category === 'cultural').map((item, index) => (
          <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" key={index}>
            <MDBCard>
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today Combo Offer</p>
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">x4</p>
                </div>
              </div>
              <MDBCardImage
                srcSet={`${item.image_url} 800w,  400w`} // Use responsive images
                sizes="(max-width: 600px) 400px, 800px"
                src={item.image_url}
                position="top"
                alt="Product"
              />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      {item.product_name}
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>${item.price}</s>
                  </p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{item.name}</h5>
                  <h5 className="text-dark mb-0" style={{ textAlign: 'center' }}>
                    <HomeRating Rate={item.rating} _Id={item._id} /> {/* Replace with your Rating component */}
                  </h5>
                  <p className="small text-success">
                    <p>${item.price - 5}</p>
                  </p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">{/* Add your content here */}</div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>





    </>
  )
}

export default Home