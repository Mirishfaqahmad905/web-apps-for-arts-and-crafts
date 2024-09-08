import React from 'react';
import JsonUpcomin from '../Json/UpComming.json';
import '../Css/Cards.css'; // Import your CSS file
const Cards = () => {
  return (
    <>
      <div className="cards-container">
        {JsonUpcomin.map((item, index) => (
          <div className="cards-rows-container" key={index}>
            <div className="cards-image">
              <img src={item.image} alt="" />
            </div>
            <div className="cards-title-image">
              <h2>{item.title}</h2>
              <div className="cards-reviews-image">
                {/* Add your review content here */}
              </div>
              <div className="cards-ratings">{item.rating}</div>
              <div className="cards-buttons">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Cards;
