import React, { useEffect, useState } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import FilterList from './FilterList';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Circle} from 'react-preloaders';
import '../Css/Products.css';
import  NewProduct  from '../Json/AllProudcts';
import { Card, Button } from 'react-bootstrap';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { add } from './Store/createSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Circles ,Ripple} from 'react-loader-spinner';,
import {Vortex} from 'react-loader-spinner';
import HomeRating from './HomeRating';
const Product = () => {
  const [loader,setloader]=useState(true);
  const [Data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
   const [pages,setpages]=useState(1);
  const [selectedColors, setSelectedColors] = useState([]);
  const [fetchedData,setFetchedData]=useState([]);
 setTimeout(() => {
  setloader(false);
 }, 2000);
  const GetAllData = async () => {
   try {
     const alldatais = await axios.get('http://localhost:30001/getallData');
setFetchedData(alldatais.data.message);
     console.log(alldatais.data.message);
   } catch (err) {
     console.log('Error occurred: ', err);
   }
 };
 useEffect(() => {
   GetAllData();
 }, []);
  const disptach=useDispatch();
 const handleAdd=((value)=>{
    disptach(add(value))
    toast.success('Item added to cart!', {
      position: 'top-right',
      autoClose: 200, // You can adjust the duration for this specific toast if needed
    });  
 })
  const  handlePrevious=()=>{
     setpages(pages+1);
  }
   const handleClickNext=()=>{
     if(pages<3){
     if(pages>1){
      setpages(pages+1);
     }
     }
   }

  const applyColorFilter = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  const rowStyle = {
    marginBottom: '20px',
  };
  const colStyle = {
    textAlign: 'center',
    padding: '10px',
  };
  // Filter function to apply filters based on the selected filter
  const applyFilter = (filter) => {
    setSelectedFilter(filter);
  };
  // Filtered products based on the selected filter
  const filteredProducts = selectedFilter
    ? fetchedData.filter((product) => {
        switch (selectedFilter) {
          case 'All product':
          return true;
          case '$20 to $60':
            return product.price >= 20 && product.price <= 60;
          case 'Less than $20':
            return product.price < 20;
          case 'Good Rating product':
            return parseFloat(product.rating) >= 4.0; // Parse rating as a float for comparison
          case '5 Rating Stars':
            return parseFloat(product.rating) === 5.0;      
          default:
            return true;
        }
      })
    : Data;
    const selectedFilterOptionIs = (category) => {
      // Filter the products based on the selected category
      const filteredProductsByCategory = fetchedData.filter((product) => product.category === category);
      // Update the filteredProducts state with the filtered products
      setSelectedFilter(null); // Clear any previous filters
      setData(filteredProductsByCategory);
    };

  return (
    <div>
      <MDBRow style={rowStyle}>
        <MDBCol size='6' lg='4' style={colStyle}>
        <div className="filter-title">
            <h1 >Categories  </h1>
            <hr/>
          </div>  
          <div className="component-list-filter">
            {/* <FilterList /> */}
            <div className="container-filter-lists" style={{display:'flex',flexWrap:'wrap' ,justifyContent:'space-around', gap:2}} >
            <Button 
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('Art')}
            >
              Arts & crafts
            </Button>
            <Button 
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('others')}
            >
           Other   
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('Electronics')}
            >
              Electronic
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('others')}
            >
               Other Product 
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('fashion')}
            >
                Fashion
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('Men')}
            >
         Men
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('cultural')}
            >
         cultural
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('Women')}
            >
         women
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('Mobiles')}
            >
Smart Phons 
            </Button>
            <Button
              className="category-buttons"
              variant="outline-primary"
              onClick={() => selectedFilterOptionIs('home')}
            >
 home items
            </Button>
{/* Add more category links as needed */}
      </div>
          </div>
          <div className="filter-products">
    <h1 style={{ backgroundColor: 'black', padding: 23, color: 'white' }}>Prices</h1>
    <hr />
    <div className='filters-buttons'>
        <label>
            <input
                type="checkbox"
                name="filter"
                value="All product"
                onChange={() => applyFilter('All product')}
            />
            All product
        </label>
        <label>
            <input
                type="checkbox"
                name="filter"
                value="$20 to $60"
                onChange={() =>applyFilter('$20 to $60')}
            />
            $20 to $60
        </label>
        <label>
            <input
                type="checkbox"
                name="filter"
                value="Less than $20"
                onChange={() => applyFilter('Less than $20')}
            />
            Less than $20
        </label>
        <label>
            <input
                type="checkbox"
                name="filter"
                value="Good Rating product"
                onChange={() => applyFilter('Good Rating product')}
            />
            Good Rating product
        </label>
        <label>
            <input
                type="checkbox"
                name="filter"
                value="5 Rating Stars"
                onChange={() => applyFilter('5 Rating Stars')}
            />
            5 Rating Stars
        </label>
    </div>
</div>;

          {/* Add the color filter section here */}
          <div className="filter-color">
            <h1>Filter by Color</h1>
            <hr />
            <ul className="color-options">
              <li>
                <label>
                  <input
                    type="checkbox"
                    value="Red"
                    onChange={() => applyColorFilter('Red')}
                  />
                  Red
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    value="Blue"
                    onChange={() => applyColorFilter('Blue')}
                  />
                  Blue
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    value="yellow"
                    onChange={() => applyColorFilter('yellow')}
                  />
                yellow
                </label>
              </li>
              {/* Add more color options as needed */}
            </ul>
          </div>
          {/* <ToastContainer position="top-right" autoClose={300} hideProgressBar={false} /> */}
        </MDBCol>
        <MDBCol size='6' lg='8' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {loader ? (<>       
          <Vortex
  visible={true}
  height="200"
  width="200"
  ariaLabel="vortex-loading"
  wrapperStyle={{marginTop:200}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
      </>): (<>
      {filteredProducts.map((value, index) => (
           <Card style={{ width: '18rem' }} key={index}>
             <Card.Img variant="top" src={value.image_url} />
             <Card.Body>
               <Card.Title>{value.product_name}</Card.Title>
               <Card.Title>{value.description}</Card.Title>
               <Card.Title>${value.price}</Card.Title>
               <Card.Text>
                 <HomeRating Rate={value.rating} />
               </Card.Text>
               <Button variant="info" onClick={()=>handleAdd(value)}>Add To Cart</Button>
             </Card.Body>
           </Card>
         ))}       
</>)}          
       </MDBCol> 
      </MDBRow>
      <div style={{ display: 'flex',  justifyContent: 'center', marginTop: '20px' }}>
<MDBPagination className='mb-0'>
    <MDBPaginationItem>
      <MDBPaginationLink onClick={handlePrevious} href='#'>Previous</MDBPaginationLink>
    </MDBPaginationItem>
    <MDBPaginationItem>
      <MDBPaginationLink href='#'>1</MDBPaginationLink>
    </MDBPaginationItem>
    <MDBPaginationItem>
      <MDBPaginationLink   href='#'>2</MDBPaginationLink>
    </MDBPaginationItem>
    <MDBPaginationItem>
      <MDBPaginationLink href='#'>3</MDBPaginationLink>
    </MDBPaginationItem>
    <MDBPaginationItem>
      <MDBPaginationLink onClick={handleClickNext} href='#'>Next</MDBPaginationLink>
    </MDBPaginationItem>
  </MDBPagination> 
  <ToastContainer position="top-right" autoClose={300} hideProgressBar={false} />
</div>
<ToastContainer position="top-center" autoClose={300} hideProgressBar={false} />
    </div>
  );
};
export default Product;
























// import React, { useEffect, useState } from 'react';
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import { useDispatch } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import '../Css/Products.css';
// import NewProduct from '../Json/AllProudcts';

// import { Card, Button } from 'react-bootstrap';
// import { add } from './Store/createSlice';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../Css/FilterList.css'

// const Product = () => {
//   const [Data, SetData] = useState(NewProduct);
//   const [selectedFilter, setSelectedFilter] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All'); // Initialize with 'All'
//   const [pages, setPages] = useState(1);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [fetchedData, setFetchedData] = useState([]);

//   const GetAllData = async () => {
//     try {
//       const alldatais = await axios.get('http://localhost:30001/getallData');
//       setFetchedData(alldatais.data.message);
//       console.log(alldatais.data.message);
//     } catch (err) {
//       console.log('Error occurred: ', err);
//     }
//   };

//   useEffect(() => {
//     GetAllData();
//   }, []);

//   const disptach = useDispatch();
//   const handleAdd = (value) => {
//     disptach(add(value));
//     toast.success('Item added to cart!', {
//       position: 'top-right',
//       autoClose: 200,
//     });
//   };

//   const handlePrevious = () => {
//     setPages(pages + 1);
//   };

//   const handleClickNext = () => {
//     if (pages < 3) {
//       if (pages > 1) {
//         setPages(pages + 1);
//       }
//     }
//   };

//   const applyColorFilter = (color) => {
//     if (selectedColors.includes(color)) {
//       setSelectedColors(selectedColors.filter((c) => c !== color));
//     } else {
//       setSelectedColors([...selectedColors, color]);
//     }
//   };

//   const applyFilter = (filter) => {
//     setSelectedFilter(filter);
//   };

//   const filteredProducts = fetchedData.filter((product) => {
//     const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
//     const filterMatch = !selectedFilter || applyFilter(product);

//     return categoryMatch && filterMatch;
//   });

//   return (
//     <div>
//       <MDBRow style={{ marginBottom: '20px' }}>
//         <MDBCol size='6' lg='4' style={{ textAlign: 'center', padding: '10px' }}>
//           <div className="filter-title">
//             <h1 style={{ backgroundColor: 'blue' }}>Categories</h1>
//             <hr />
//           </div>
//           <div className="component-list-filter">
//             <div className="container-filter-list">
//               <Link
//                 to={''}
//                 className={`category-link ${selectedCategory === 'Arts & crafts' ? 'active' : ''}`}
//                 onClick={() => setSelectedCategory('Arts & crafts')}
//               >
//                 Arts & crafts
//               </Link>
//               <Link
//                 to={''}
//                 className={`category-link ${selectedCategory === 'electronic' ? 'active' : ''}`}
//                 onClick={() => setSelectedCategory('electronic')}
//               >
//                 electronic
//               </Link>
//               <Link
//                 to={''}
//                 className={`category-link ${selectedCategory === 'home' ? 'active' : ''}`}
//                 onClick={() => setSelectedCategory('home')}
//               >
//                 Home appliance
//               </Link>
//               <Link
//                 to={''}
//                 className={`category-link ${selectedCategory === 'men' ? 'active' : ''}`}
//                 onClick={() => setSelectedCategory('men')}
//               >
//                 Men
//               </Link>
//               <Link
//                 to={''}
//                 className={`category-link ${selectedCategory === 'women' ? 'active' : ''}`}
//                 onClick={() => setSelectedCategory('women')}
//               >
//                 Women
//               </Link>
//             </div>
//           </div>
//           <div className="filter-products">
//             <h1 style={{ backgroundColor: 'black', padding: 23, color: 'white' }}>Prices</h1>
//             <hr />
//            <div className='filters-buttons'>
// //         <label>
// //             <input
//                 type="checkbox"
//                 name="filter"
//                 value="All product"
//                 onChange={() => applyFilter('All product')}
//             />
//             All product
//         </label>
//         <label>
//             <input
//                 type="checkbox"
//                 name="filter"
//                 value="$20 to $60"
//                 onChange={() =>applyFilter('$20 to $60')}
//             />
//             $20 to $60
//         </label>
//         <label>
//             <input
//                 type="checkbox"
//                 name="filter"
//                 value="Less than $20"
//                 onChange={() => applyFilter('Less than $20')}
//             />
//             Less than $20
//         </label>
//         <label>
//             <input
//                 type="checkbox"
//                 name="filter"
//                 value="Good Rating product"
//                 onChange={() => applyFilter('Good Rating product')}
//             />
//             Good Rating product
//         </label>
//         <label>
//             <input
//                 type="checkbox"
//                 name="filter"
//                 value="5 Rating Stars"
//                 onChange={() => applyFilter('5 Rating Stars')}
//             />
//             5 Rating Stars
//         </label>
//     </div>

//           </div>
//           <div className="filter-color">
//             <h1>Filter by Color</h1>
//             <hr />
//             <ul className="color-options">
//               {/* ... Your color filter checkboxes ... */}
//             </ul>
//           </div>
//         </MDBCol>
//         <MDBCol size='6' lg='8' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//           {filteredProducts.map((value, index) => (
//             <Card style={{ width: '18rem' }} key={index}>
//               <Card.Img variant="top" src={value.image_url} />
//               <Card.Body>
//                 <Card.Title>{value.product_name}</Card.Title>
//                 <Card.Title>{value.category}</Card.Title>
//                 <Card.Title>${value.price}</Card.Title>
//                 <Card.Text>
//                   {value.rating}
//                 </Card.Text>
//                 <Button variant="primary" onClick={() => handleAdd(value)}>Add To Cart</Button>
//               </Card.Body>
//             </Card>
//           ))}
//         </MDBCol>
//       </MDBRow>
      
//       {/* ... Pagination and ToastContainer code ... */}
//     </div>
//   );
// };

// export default Product;
