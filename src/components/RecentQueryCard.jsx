import React from 'react';

const RecentQueryCard = ({ query }) => {
  const { prod_name, prod_brand, prod_image, query_title, reason, user_name, user_email, user_photo, createdAt } = query;
  // customize creation time
  const date = new Date(createdAt);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[300px] object-cover"
          src={prod_image} />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <img className="w-12 h-12 rounded-full" src={user_photo} alt="" />
          <h4 className="bg-gray-300 px-2 rounded-sm font-medium">{user_name}</h4>
          <strong>{formattedDate}</strong>
        </div>
        <h2 className="card-title">{prod_name}</h2>
        <p><span className="text-base font-medium">Brand: </span> <span className="font-mono">{prod_brand}</span></p>
        <h3 className="text-xl font-semibold font-serif">{query_title}</h3>
        <p><span className="text-base font-medium">Boycotting reason:</span> {reason}</p>
        <div className="card-actions justify-end mt-5">
          <button className="btn bg-teal-600 text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default RecentQueryCard;