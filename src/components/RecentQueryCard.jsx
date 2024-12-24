import React from 'react';
import { Link } from 'react-router-dom';

const RecentQueryCard = ({ query }) => {
  const { _id, prod_name, prod_brand, prod_image, query_title, reason, user_name, user_email, user_photo, createdAt } = query;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[300px] object-cover"
          src={prod_image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prod_name}</h2>
        <p><span className="text-base font-medium">Brand: </span> <span className="font-mono">{prod_brand}</span></p>
        <h3 className="text-xl font-semibold font-serif">{query_title}</h3>
        <p><span className="text-base font-medium">Boycotting reason:</span> {reason}</p>
        <div className="card-actions justify-end mt-5">
          <Link to={`/query-details/${_id}`} className="btn bg-teal-600 text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default RecentQueryCard;