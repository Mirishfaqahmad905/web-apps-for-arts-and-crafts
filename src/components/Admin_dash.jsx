import React, { useEffect, useState } from 'react';
import '../Css/Admin_dash.css';
import Lottie from 'lottie-react';
import animationData from '../assets/admin_users.json';
import products from '../assets/Total_number_products.json';
import payment from '../assets/admin_success_payment.json';
import SuccessfulOrders from '../assets/total_orders.json';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import AddProduct from './Add_product';

const AdminDash = () => {
  const isAdminLogin = useSelector((state) => state.auth.adminLoginState);
  const [data, setData] = useState({ totalUsers: 0, totalProducts: 0, totalPayments: 0, totalOrders: 0 });

  useEffect(() => {
    axios
      .get('http://localhost:30001/count')
      .then((response) => {
        setData(response.data); // Use response.data to access the response data
      })
      .catch((err) => {
        console.log('Error occurred during fetching data from the database: ' + err);
      });
  }, []);

  return (
    <>
      {isAdminLogin ? (
        <div className="container-product_payment_">
          <div className="total_user">
            <div className="number-icon">
              <div className="admin-icon">
                <Lottie style={{ width: 300 }} animationData={animationData} />
              </div>
              <div className="admin-number">
                <strong>
                  <h4>Total Customers: {data.totalUsers}</h4>
                </strong>
              </div>
            </div>
          </div>
          <div className="total-orders">
            <div className="admin-icon">
              <strong>
                <h1>
                  <Lottie style={{ width: 250 }} animationData={products} />
                </h1>
              </strong>
            </div>
            <div className="admin-number">
              <strong>
                <h4>Total Number Products: {data.totalProducts}</h4>
              </strong>
            </div>
          </div>
          <div className="total-products">
            <div className="admin-icon">
              <h1>
                <Lottie style={{ width: 250 }} animationData={payment} />
              </h1>
            </div>
            <div className="admin-number">
              <strong>
                <h4>Payment Successful: {data.totalPayments}</h4>
              </strong>
            </div>
          </div>
          <div className="total-payment">
            <div className="admin-icon">
              <h1>
                <Lottie style={{ width: 250 }} animationData={SuccessfulOrders} />
              </h1>
            </div>
            <div className="admin-number">
              <strong>
                <h4>Total Number of Orders: {data.totalOrders}</h4>
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <div className="please-login">
          Please login as an admin.
        </div>
      )}
      <div className="container-add-products">
        <div className="container-header-add_products">
          <AddProduct/>
        </div>
      </div>

   
    </>
  );
};

export default AdminDash;
