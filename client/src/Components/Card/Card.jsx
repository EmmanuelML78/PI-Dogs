import React from 'react';
import { Link } from 'react-router-dom';
import "./card.css";


function Card  ({ name, weight, image, id, temperaments })  {
  return (
    <div className="Container" style={{ backgroundImage: `url(${image})` }}>
      <div className="Container__info">
        <div className="Info__name">
            <Link
              to={`/details/${id}`}
              style={{ textDecoration: "none", color: "#fff" }}>
              <p>{name}</p>
            </Link>
        </div>
        <div className="Info__temperament">
          {temperaments?.map((item, index) => {
            return (
              <div key={index} className="temperament__item">
                {item}
              </div>
            );
          })}
        </div>
        <div className="Info__weight">
          <p>
            {weight.length && weight.length > 1
              ? `${weight[0]} - ${weight[1]} kgs`
              : `${weight[0]} kgs`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;