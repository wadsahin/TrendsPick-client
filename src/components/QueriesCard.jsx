import React from 'react';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const QueriesCard = ({ query }) => {
  const { _id, prod_name, prod_brand, prod_image, query_title, reason, user_name, user_email, user_photo, createdAt, recommendationCount } = query;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className='h-80'
          src={prod_image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prod_name}</h2>
        <p><span className="text-base font-medium">Brand: </span> <span className="font-mono">{prod_brand}</span></p>
        <h3 className="text-xl font-semibold font-serif">{query_title}</h3>
        <p><span className="text-base font-medium">Boycotting reason:</span> {reason}</p>
        <div className="card-actions justify-end mt-5">
          <button className="btn text-xl"><FcLike size={26} /> {recommendationCount}</button>
          <Link to={`/query-details/${_id}`} className="btn btn-outline btn-info text-base">Recommend</Link>
        </div>
      </div>
    </div>
  );
};

export default QueriesCard;