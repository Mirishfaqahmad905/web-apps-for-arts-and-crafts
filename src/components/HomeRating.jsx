
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { rateProduct } from './Store/createSlice';
import { AiOutlineStar } from 'react-icons/ai';
const HomeRating = ({ Rate, _Id ,reviews}) => {
  const [number, setNumber] = useState();
  const storedRating = parseFloat(localStorage.getItem(`rating-${Rate}`)) || 0;
  const [rating, setRating] = useState(storedRating);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem(`rating-${Rate}`, rating.toString());
  }, [rating, Rate]);
  const handleRatingChange = (newRating) => {
    const productId = _Id; // Replace with the actual productId
    // Dispatch the rateProduct action with the product ID and new rating
    dispatch(rateProduct({ productId, rating: newRating }));
    setRating(newRating); // Update the rating state
    setNumber(newRating);
    console.log(rating + "rating is ");
  };
  const RatingStare = Array.from({ length: 5 }, (elem, index) => {
    const starValue = index + 1;
    const isHalfStar = Rate >= starValue - 0.5 && Rate < starValue;
    return (
      <span key={index} style={{}}>
        {isHalfStar ? (
          <FontAwesomeIcon style={{ color:  'yellowgreen' }} icon={faStarHalfAlt} />
        ) : Rate >= starValue ? (
          <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} />
        ) : (
          <AiOutlineStar/>
        )}
      </span>
    );
  });
  return (
    <div className="rating">
      <h6>Rating Stars:{RatingStare} {Rate}  {reviews} </h6>
    </div>
  );
};
export default HomeRating;
