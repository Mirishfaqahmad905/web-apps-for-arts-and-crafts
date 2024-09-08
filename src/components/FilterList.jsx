import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/FilterList.css';
import axios from 'axios';
const FilterList = () => {
  const [fetchedData,setFetchedData]=useState([]);
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
  return (
    <>
      <div className="container-filter-list">
        <Link to={'/Electracity'} className="category-link">
          Electronics
        </Link>
        <Link to={'/Fashion'} className="category-link">
          Fashion
        </Link>
        <Link to={'/Home'} className="category-link">
          Home & Kitchen
        </Link>
        <Link to={'/Books'} className="category-link">
          Books
        </Link>
        <Link to={'/Toys'} className="category-link">
          Toys & Games
        </Link>
      </div>
    </>
  );
};
export default FilterList;
