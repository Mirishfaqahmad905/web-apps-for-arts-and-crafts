

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../Css/Add_product.css';
import { Button, Table } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationData from '../assets/show_products_data.json';
import formIcon from '../assets/forms_.json';
import { useSelector } from 'react-redux';
 
const AddProduct = () => {
  const [updateDataHook, setUpdateHook] = useState({});
  const [updateButtonState, setUpdateButtonState] = useState(false);
  const [get_data, setGet_data] = useState([]);
  const [myproductsState, setShowProductState] = useState(false);
  const [statebutton, setStatebutton] = useState(false);
  const [search, setSearchData] = useState('');
  const isAdminLogin = useSelector((state) => state.auth.adminLoginState);
  const [product, setProduct] = useState({
    product_name: '',
    rating: 0,
    quantity: 0,
    image_url: '',
    availability: false,
    category: '',
    description: '',
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setProduct({
      ...product,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.category || !product.quantity || !product.image_url || !product.rating) {
      Swal.fire({
        title: 'Warning!',
        text: 'Enter Information in Input Field.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    } else {
      if (updateButtonState) {
        axios
          .put(`http://localhost:30001/update_record/${updateDataHook._id}`, product)
          .then((response) => {
            console.log('Product updated:', response.data);
            if (response.data.message === 'Product updated successfully') {
              Swal.fire({
                title: 'Are you sure?',
                text: 'You can update many times.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire('Updated!', 'Your file has been updated.', 'success');
                }
              });
            }
            setUpdateButtonState(false);
            setUpdateHook({});
          })
          .catch((error) => {
            console.error('Error updating product:', error);
          });
      } else {
        axios
          .post('http://localhost:30001/addproduct', product)
          .then((response) => {
            console.log('Product created:', response.data);
            Swal.fire({
              title: 'Info!',
              text: 'Product Uploaded to database.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            setStatebutton(false);
          })
          .catch((error) => {
            console.error('Error creating product:', error);
          });
      }

      setProduct({
        product_name: '',
        rating: 0,
        quantity: 0,
        image_url: '',
        availability: false,
        category: '',
        description: '',
        price: 0,
      });
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:30001/crud')
      .then((response) => {
        setGet_data(response.data);
        console.log(response.data + " data from database ");
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const Deleting_item = (_id) => {
    axios
      .delete('http://localhost:30001/delete_item/' + _id)
      .then((response) => {
        if (response.data.message === 'Product successfully deleted') {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
        }
      })
      .catch((error) => {
        console.error('Error occurred during deletion:', error);
      });
  };

  const Update_Record = (item) => {
    setUpdateButtonState(true);
    setUpdateHook(item);
    setProduct(item);
  };

  return (
    <>
     {  isAdminLogin ? (    
      <Container className='container-admin_portions'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} mdOffset={1} lgOffset={2} mdOrder={2} lgOrder={1}>
            {statebutton ? (
              <>
                <div className="container-headers" style={{ textAlign: 'center' }}>
                  <h5>Add Products here</h5>
                </div>
                <div className="product_form">
                  <form onSubmit={handleSubmit}>
                    <div className="product_name">
                      <input
                        type="text"
                        name="product_name"
                        placeholder="Product Name"
                        value={product.product_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="rating_product">
                      <label>Rating
                        <input
                          type="text"
                          name="rating"
                          placeholder="Rating"
                          value={product.rating}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <div className="quantity">
                      <input
                        type="text"
                        name="quantity"
                        placeholder="Quantity"
                        value={product.quantity}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="image_url">
                      <input
                        type="text"
                        name="image_url"
                        placeholder="Image URL"
                        value={product.image_url}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="description">
                      <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={product.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="category_product">
                      <select
                        name="category"
                        value={product.category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a Category</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Art">Art</option>
                        <option value="Hand & Crafts">Hand & Crafts</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Latest">Latest</option>
                        <option value="Technical">Technical</option>
                        <option value="Home">Home</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Trending">Trending</option>
                        <option value="Mobiles">Smart Phone</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="product_availability">
                      <label>
                        <input
                          type="checkbox"
                          name="availability"
                          checked={product.availability}
                          onChange={handleInputChange}
                        />
                        Available
                      </label>
                    </div>
                    <div className="product_price">
                      <label>Price
                        <input
                          type="text"
                          name="price"
                          value={product.price}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                    <button type="submit">
                      {updateButtonState ? 'Update Product' : 'Add Product'}
                    </button>
                    <button type="button" onClick={() => setStatebutton(false)}>Hide Form</button>
                  </form>
                </div>
              </>
            ) : (
              <>
                <div className="container-showButton" style={{ textAlign: 'center' }}>
                  <Button onClick={() => setStatebutton(true)}><Lottie style={{ width: 200 }} animationData={formIcon} /></Button>
                </div>
              </>
            )}
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="container_form_products" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
              {myproductsState ? (
                <>
                  <Button onClick={() => setShowProductState(false)}>Hide Products Data</Button>
                  <div className="crud_operation_here" style={{ textAlign: 'center' }}>
                    <div>
                      <input
                        type="search"
                        onChange={(e) => setSearchData(e.target.value)}
                        className="search-input_products"
                        placeholder="Search"
                      />
                    </div>
                    <Table striped bordered className="table_crud">
                      <thead>
                        <tr>
                          <th>_Id</th>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th><FontAwesomeIcon icon={faTrash} /></th>
                          <th><FontAwesomeIcon icon={faEdit} /></th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: 20 }}>
                        {get_data.filter((item) => {
                          return search.toLowerCase() === '' ? true : (item.product_name && item.product_name.toLowerCase().includes(search.toLowerCase()));
                        }).map((item) => (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.product_name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>{item.category}</td>
                            <td>
                              <Button
                                color="primary"
                                onClick={() => Deleting_item(item._id)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </Button>
                            </td>
                            <td>
                              <Button onClick={() => Update_Record(item)}>
                                <FontAwesomeIcon icon={faEdit} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </>
              ) : (
                <>
                  <div className="show_product_center">
                    <Button onClick={() => setShowProductState(true)}><Lottie style={{ width: 200 }} animationData={animationData} /></Button>
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
       ) :  ( <p> please login first to create update </p> )}
    </>
  );
};

export default AddProduct;

