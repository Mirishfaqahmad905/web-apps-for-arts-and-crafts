import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
 
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../Css/user_dashboard.css';
import Lottie from 'lottie-react';
import animationData1 from '../assets/dashboard_user.json';
import animationData2 from '../assets/home_userdashobard.json';
import animationData3 from '../assets/payment_userdashboard.json';
import animationData4 from '../assets/order_userdashboard.json';
import SideBar_user from './User_dashboard/SideBar_user';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { faHouse, faHome, faMoneyBill, faBox, faDesktop, faDashboard, faCogs, faAddressBook, faStop } from '@fortawesome/free-solid-svg-icons';
const User_dashboard = () => {
    const [auth0ProductData, setAuth0Product] = useState([]);
    const dispatch = useDispatch();
    const [product, setProducts] = useState();
    const [UserEmail, setUserEmail] = useState();
    const { isAuthenticated: auth0IsAuthenticated, user: auth0User } = useAuth0();
    const userCustom = useSelector((state) => state.auth.user);
    const auth0UserId = auth0User?.sub || (userCustom ? userCustom._id : null);

    let userEmail = "";
    if (auth0IsAuthenticated) {
        userEmail = auth0User.email;
    } else if (userCustom) {
        userEmail = userCustom.email;
    }
     // pushing unauthenticated user to otherplace
     if(!auth0IsAuthenticated || !userCustom) {
        window.href="/";
     }
      else {
         window.href='/user_dashboard'
      }
    console.log(userEmail);
    console.log(auth0UserId);
    const SelectProject = () => {
        if (auth0UserId) {
            axios.get(`http://localhost:30001/user_dashboard/${auth0UserId}`)
                .then((response) => {
                    setAuth0Product(response.data);
                    console.log('you item purchased is that ');
                    console.log(response.data);
                })
                .catch((err) => {
                    console.error("Error during fetching data from the database: ", err);
                });
        }
    };
    const Orders_data = () => {
        // Construct the URL with userEmail
        const url = `http://localhost:30001/getorder/${auth0UserId}`;

        axios
            .get(url)
            .then((response) => {
                console.log('item you have purchased')
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.log('error occurred in the database during fetching products: ' + err);
            });
    };
    useEffect(() => {
        Orders_data();
    }, []);

    const [showDashboard, setshowDashobard] = useState(false);
    const [setHome, setshowHome] = useState(false);
    const [payment, setShowPayment] = useState(false);
    const [order, setShoworder] = useState(false);
    console.log(order)
    const Dashboard = () => {
        setshowDashobard(true);
        setshowHome(false)
        setShowPayment(false);
        setShoworder(false);
        //  window.alert('click');
    }
    const Home = () => {
        setshowHome(true)
        setShowPayment(false);
        setShoworder(false);
        setshowDashobard(false);
    }
    const Payment = () => {
        setshowDashobard(false);
        setshowHome(false);
        setShoworder(false);
        setShowPayment(true);
    }
    const Orders = () => {
        setshowDashobard(false);
        setShoworder(true);
        setshowHome(false)
        setShowPayment(false);
    }
    useEffect(() => {
        SelectProject();
        setshowDashobard(true);

    }, [auth0UserId]);
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
            <div className="user_picture_" style={{ display: 'flex', justifyItems: 'flex-start', alignItems: 'center' }}>
                {auth0IsAuthenticated ?
                    (<>

                        <img src={auth0User.picture} alt="" />

                        <h5>Hello {auth0User.name}</h5>
                    </>)
                    : (<>
                        {userCustom ? (<>
                            <h2>{userCustom.name}</h2>
                        </>) :
                            (<>
                            </>)}
                    </>)}
            </div>
            <div>
                <div className='user_dashboard_row'>

                    <div className='left_menu_button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        {/* <li onClick={Dashboard} >Dashboard<Link>  <Lottie   style={{ width: 100, height: 100 }} animationData={animationData1} /> </Link></li>
                        {/* <li onClick={Home}><Link>     <Lottie  style={{width:100,height:100} } animationData={animationData2}/> </Link></li> */}
                        {/* <li onClick={Payment}><Link>     <Lottie style={{ width: 100, height: 100 }} animationData={animationData3} /> </Link></li>
                        <li onClick={Orders}><Link>     <Lottie style={{ width: 100, height: 100 }} animationData={animationData4} /> </Link></li> */}
                        {/* */}
                        <li>

                            <ul className="menu-list-icons">
                                <li><a style={{ textDecoration: 'none' }} onClick={Dashboard} href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={48} width={48} ><g><path d="M1 31.54a4 4 0 0 0 1.32 0.38c1.58 0.22 4.94 0.48 8.3 0.62a48.72 48.72 0 0 0 9.56 -0.22 2.1 2.1 0 0 0 1.02 -0.82 4 4 0 0 0 0.48 -1.9c0 -0.86 0.12 -1.7 0.14 -2.56s0 -1.72 0 -2.58l-0.44 -17.04 -0.32 -4.24a7.02 7.02 0 0 0 0 -1.44 1.78 1.78 0 0 0 -0.5 -0.98 3.86 3.86 0 0 0 -1.92 -0.48C16.16 0.1 10.74 0 6.5 0H0.3a14 14 0 0 0 -0.14 3.78C0.2 9.62 0.28 22.42 0.42 28l0 2.48a1.4 1.4 0 0 0 0.58 1.06Zm1.64 -30c3.74 0 12 0.24 15.48 0.54 0.32 0 0.66 0 0.92 0.12 0 0.26 0.32 5.3 0.32 5.3l0 12c0 1.72 0 3.44 0.12 5.14l0 2.44c0 0.82 0 1.62 -0.14 2.44 0 0.18 0 0.58 -0.1 0.74a47 47 0 0 1 -6.74 0.12C9.38 30.22 6 30 3.84 30a13.02 13.02 0 0 1 -1.28 -0.26c0 -0.44 0 -1.02 -0.1 -1.7 -0.28 -5.68 -0.78 -18.46 -1 -24.3L1.38 1.5Z" fill="#15cfba" fillRule="evenodd" strokeWidth={2} /><path d="M47.06 16.26a2 2 0 0 0 -1.06 -0.82 51.88 51.88 0 0 0 -9.74 -0.34c-3.44 0 -6.86 0.28 -8.48 0.5a3.5 3.5 0 0 0 -1.36 0.36 1.3 1.3 0 0 0 -0.52 1.08l0 2.48 0 24.44v2.72a0.88 0.88 0 0 0 0.3 0.82c0.4 0.46 3.78 0.18 6 0.18 4.24 0 9.66 0 12.14 -0.22a4 4 0 0 0 1.88 -0.46 1.8 1.8 0 0 0 0.52 -0.98 11.82 11.82 0 0 0 0 -1.44l0.3 -4.24 0.44 -17.04 0 -2.58c0 -0.86 0 -1.7 -0.14 -2.56a4 4 0 0 0 -0.28 -1.9Zm-1.84 24 -0.2 4.3c0 0.22 -0.2 0.74 -0.1 1 -0.26 0 -0.6 0.1 -0.94 0.12 -3.56 0.3 -11.74 0.46 -15.46 0.54h-1.28l0 -2.28c0.14 -5.88 0.46 -18.78 0.66 -24.4l0 -1.7a10 10 0 0 1 1.3 -0.26c2.2 -0.14 5.68 -0.22 8.88 -0.24a55.54 55.54 0 0 1 6.86 0.2c-0.14 0.18 0.14 0.56 0.14 0.76 0 0.82 0.12 1.64 0.14 2.44s0 1.62 0 2.44c0 1.7 0 3.42 -0.1 5.14 0.1 4 0.16 7.98 0.1 11.96Z" fill="#15cfba" fillRule="evenodd" strokeWidth={2} /><path d="M22.54 37.48a12.2 12.2 0 0 0 -0.12 -1.28 1.68 1.68 0 0 0 -0.4 -0.78 2 2 0 0 0 -0.96 -0.4l-3.42 0c-4.94 0 -13.28 0.52 -14.58 0.6 0 0 -2 -0.28 -2.18 0.3 0 0.14 -0.22 3.54 -0.22 3.72l0 5.24a6.4 6.4 0 0 0 0 1.52 1.7 1.7 0 0 0 0.5 1.02 3.64 3.64 0 0 0 1.72 0.46C5.02 48 9.74 48 14 48c3.16 0 6 -0.26 7.4 -0.36l0.8 0a1.22 1.22 0 0 0 1 -0.72 8.72 8.72 0 0 0 0.16 -3.18c-0.2 -2.4 -0.72 -5.34 -0.82 -6.26ZM20 45.3c-3.42 0.24 -10.36 0.68 -14.64 0.74 -1.22 0 -2.32 0.2 -2.96 0.14a4.22 4.22 0 0 1 -0.16 -1.38L2 39.58l0 -2.4v-0.18h1.14c1.48 0 12 -0.2 16.3 0a3.36 3.36 0 0 1 0.8 0.12c0 0.22 0.12 0.46 0.12 0.56 0 0.8 0.4 3.14 0.6 5.22 0 0.88 0.18 1.72 0.18 2.28Z" fill="#15cfba" fillRule="evenodd" strokeWidth={2} /><path d="M47.56 0.78a1.14 1.14 0 0 0 -1.02 -0.66l-0.8 0 -7.4 0c-4.24 0 -8.96 0.26 -11.14 0.56a3.54 3.54 0 0 0 -1.7 0.52 1.78 1.78 0 0 0 -0.46 1.04 8.9 8.9 0 0 0 0 1.52l0.26 5.24 0.14 2.4s0 1.4 0.44 1.78 16.58 -0.26 16.58 -0.26a31.06 31.06 0 0 0 3.4 -0.2 1.66 1.66 0 0 0 0.94 -0.44 1.44 1.44 0 0 0 0.38 -0.8 10.2 10.2 0 0 0 0 -1.28c0 -0.92 0.46 -3.88 0.56 -6.16a8.18 8.18 0 0 0 -0.18 -3.26Zm-2 4c0 2 -0.32 4.44 -0.38 5.24 0 0 0 0.34 -0.1 0.56a4.9 4.9 0 0 1 -0.78 0.16c-4.28 0.38 -14.82 0.64 -16.3 0.68l-1.12 0a0.68 0.68 0 0 1 0 -0.18l0 -2.4V3.62c0 -0.22 0.1 -1.2 0.22 -1.22 0.62 0 1.62 -0.12 2.84 -0.16 4.3 -0.1 11.24 0 14.66 0.14l1.12 0c-0.14 0.6 -0.2 1.44 -0.24 2.34Z" fill="#15cfba" fillRule="evenodd" strokeWidth={2} /></g></svg>  </a></li>
                                <li ><a style={{ textDecoration: 'none' }} onClick={Home} href="#"><FontAwesomeIcon icon={faHome} style={{ fontSize: 30 }} />   Home</a></li>
                                <li ><a style={{ textDecoration: 'none' }} onClick={Payment} href="#"><FontAwesomeIcon icon={faMoneyBill} style={{ fontSize: 30 }} /> payment detail</a></li>
                                <li ><a style={{ textDecoration: 'none' }} onClick={Orders} href="#"><FontAwesomeIcon icon={faBox} style={{ fontSize: 30 }} />purchasing detial</a></li> {/* This line includes the inventory icon */}
                                <li ><a style={{ textDecoration: 'none' }} onClick={Orders} href="#"><FontAwesomeIcon icon={faAddressBook} style={{ fontSize: 30 }} />delivery detial</a></li> {/* This line includes the inventory icon */}

                            </ul>
                        </li>

                    </div>
                    <div sm={10}>


                        <div className="dashboard_container" >

                            <div className="container-user_dashboard" >

                                {/* order Data Goes to here  */}
                                {order ? (<>

                                    <div className="order_data_detail">
                                        <div className="orders_detail">
                                            <h2>selected Orders Detail is here  </h2>
                                            <MDBTable align='middle'>
                                                <MDBTableHead>
                                                    <tr>
                                                        <th scope='col'>Date</th>
                                                        <th scope='col'>Customer ID</th>
                                                        <th scope='col'>Email</th>
                                                        <th scope='col'>Product Name</th>
                                                        <th scope='col'>Price</th>
                                                        <th scope='col'>Quantity</th>
                                                        <th scope='col'>Rating</th>

                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
                                                    {product.map((data, index) => (
                                                        <tr key={index}>
                                                            <td>{data.Date}</td>
                                                            <td>{data.customerId}</td>
                                                            <td>{data.email}</td>
                                                            {data.products.map((product, productIndex) => (
                                                                <React.Fragment key={productIndex}>
                                                                    <td>{product.product_name}</td>
                                                                    <td>{product.price}</td>
                                                                    <td>{product.quantity}</td>
                                                                    <td><img src={product.image_url} /></td>
                                                                    <td>{product._id}</td>
                                                                </React.Fragment>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </MDBTableBody>
                                            </MDBTable>
                                        </div>
                                    </div>
                                </>) : (<>
                                </>)}
                                {/* Show User Data  */}
                                {showDashboard ? (<>
                                    < ShowDashboardFun />
                                </>) : (<>
                                </>)}
                                {payment ? (<>

                                    {auth0IsAuthenticated ? (
                                        <>
                                            <Table striped="columns">
                                                <thead>
                                                    <tr>
                                                        <th>Payment  Id  </th>
                                                        <th>Brand </th>

                                                        <th>purchased Month</th>
                                                        <th>Expire year of Card </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {auth0ProductData.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item._id}</td>
                                                            <td>{item.brand}</td>
                                                            <td>{item.exp_month}</td>
                                                            <td>{item.exp_year}</td>
                                                            <td>{item.product_name}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>

                                            </Table>

                                        </>
                                    ) : (
                                        <>
                                            {userCustom ? (
                                                <>
                                                    <h4 className='bg bg-green-50' >Hello {userCustom.name} :all purachased history </h4>
                                                    <div className="container_sub_user">
                                                        <h4>Here are all the products and items you have purchased:</h4>
                                                        <Table striped="columns">
                                                            <thead>
                                                                <tr>
                                                                    <th>Payment  Id  </th>
                                                                    <th>Payment Method </th>

                                                                    <th>purchased Mongth</th>
                                                                    <th>Expire year of Card </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {auth0ProductData.map((item, index) => (
                                                                    <tr key={index}>
                                                                        <td>{item._id}</td>
                                                                        <td>{item.brand}</td>
                                                                        <td>{item.exp_month}</td>
                                                                        <td>{item.exp_year}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>

                                                        </Table>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {showDashboard ? (<>
                                                        <h2>Dashboard </h2>

                                                    </>) : (<>


                                                        <h1>Login to show all data here</h1>
                                                    </>)}
                                                </>
                                            )}
                                        </>
                                    )}

                                </>)
                                    : (<>

                                    </>)
                                }
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default User_dashboard;

const ShowDashboardFun = () => {
    return (<>

        <div className="container-user-dashboard">
            <div className="container-one-user">
                <h2 style={{ textAlign: 'center' }}>here we will show all orders of the user who are buying the products </h2>
                <div className="container_for_dashboard1" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                    <div className="icon-container1" style={{}}>
                        <div className="fontAwesome">
                            <span className="material-icons" style={{ fontSize: 100 }}>
                                dashboard
                            </span>

                        </div>
                        <p>

                            <p>Here, you can manage and monitor all aspects of your account and activities. Explore the following sections to get started:</p>

                        </p>
                        <strong>                          <h3>Welcome to Your Dashboard</h3> </strong>
                    </div>
                    <div className="container_for_dashboard2">


                        {/* <div className="icon-container2">
                    <span className="material-icons-outlined">
                 work_history
                 </span>
 <p>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus velit fugit repudiandae ducimus necessitatibus reprehenderit totam amet, laborum odio quos esse sed, unde fugiat nulla nemo repellat sint ipsam laudantium.
 </p>
                        <strong>Text goes here </strong>
                    </div> */}



                    </div>
                    <div className="container_for_dashboard3">
                        <div className="icon-container3">
                            <span className="material-icons" style={{ fontSize: 100 }}>
                                account_balance
                            </span>
                            <p>
                                Welcome to your account dashboard, where you can easily manage your finances and keep track of your transactions.
                            </p>

                            <strong><h3>Manage Your Payment History </h3></strong>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>)
}
