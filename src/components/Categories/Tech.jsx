import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../Store/createSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import HomeRating from '../HomeRating';
import Lottie from 'lottie-react';
import Loading from '../../assets/Loading.json'

const Tech = () => {
  const [otherData, setOtherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3001/getallData') // Adjust the URL accordingly
      .then((response) => {
        setOtherData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p><Lottie style={{width:300,height:300}} animationData={Loading}/></p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const AddProductToCart = (item) => {
    dispatch(add(item));
    toast.success('Item added to cart!', {
      position: 'top-center',
      autoClose: 200, // You can adjust the duration for this specific toast if needed
    });
  };

  return (
    <>
      <h1 style={{  }}>Technical product</h1>
      <div>
        <div className="latest-product-trend">
          <div className="product-container">
            {otherData
              .filter((item) => item.category === 'Mobiles' || item.category === 'Electronics')
              .map((product, index) => (
                <Card className="card-new-arrival" style={{ width: '18rem' }} key={index}>
                  <Card.Img
                    variant="top"
                    className="card-new-image"
                    style={{ height: 300 }}
                    src={product.image_url}
                  />
                  <Card.Body>
                    <Card.Title className="card-new-image">{product.product_name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                      <div className="container" style={{ textAlign: 'center' }}>
                        <HomeRating Rate={product.rating} />
                      </div>
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{ color: 'white', fontWeight: 'bold' }}
                      onClick={() => AddProductToCart(product)}
                    >
                      Order Now
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
