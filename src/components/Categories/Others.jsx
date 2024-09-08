import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomeRating from '../HomeRating';
import { toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
// import LoadingImage from '../../assets/Loading.json';
import { useDispatch } from 'react-redux';
import { add } from '../Store/createSlice';

const Others = () => {
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
    return <p>Loading...</p>;
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
  
      <h1 style={{ textAlign:'center',padding:40 }}>Other products are here</h1>
      <div>
        <div className="latest-product-trend">
          <div className="product-container">
            {otherData.filter(item => item.category === 'others' ).map((product, index) => (
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
                  <Button variant="dark" style={{ color: 'white', fontWeight: 'bold' }} onClick={()=>Add_product(product)}>Order Now</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Others;
