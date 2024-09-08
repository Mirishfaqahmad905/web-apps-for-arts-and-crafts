import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomeRating from '../HomeRating';

import { ToastContainer, toast } from 'react-toastify';
import LoadingImage from '../../assets/Loading.json';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { add } from '../Store/createSlice';
import Lottie from 'lottie-react';

const Fashion = () => {
  const [otherData, setOtherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const dispatch=useDispatch();
  useEffect(() => {
    axios.get('http://localhost:30001/getallData')
      .then((response) => {
        setOtherData(response.data.message);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p><Lottie animationData={LoadingImage}/></p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
const Add_product=(item)=>{
    dispatch(add(item));
    toast.success('Item added to cart!', {
      position: 'top-center',
     
      autoClose: 200, // You can adjust the duration for this specific toast if needed
    });
    
}
  return (
    <>
      <h1 style={{ textAlign:'center'  }}>Fashions</h1>
      <div>
        <div className="latest-product-trend">
          <div className="product-container">
            {otherData.filter(item => item.category === 'fashion' ).map((product, index) => (
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
                  <Button variant="success" style={{ color: 'white', fontWeight: 'bold' }} onClick={()=>Add_product(product)}>Order Now</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Fashion;
