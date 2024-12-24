import React from 'react';

const RecommendationCard = ({ recommendation }) => {
  const {rec_prod_name, rec_prod_image, rec_title, rec_reason, recommender_name,recommendedAt} = recommendation;
  // Date formatting
  const formattedDate = new Date(recommendedAt).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // For AM/PM format
    weekday: 'short', // Short weekday name (e.g., Sun)
    day: 'numeric', // Day of the month
    month: 'short', // Short month name (e.g., Dec)
  });

  return (
    <div className="w-11/12 mx-auto mt-2 bg-white p-2 flex justify-between gap-3">
      <img src={rec_prod_image} className="w-24 h-24" alt="" />
      <div>
        <p className='bg-stone-200 w-fit px-2 rounded-sm'>{recommender_name}</p>
        <h3 className='text-lg font-medium'>" {rec_title} " </h3>
        <h3 className='text-xl font-semibold'>Brand: {rec_prod_name}</h3>
        <p>Reason: {rec_reason}</p>
      </div>
      <div>
        <strong className="text-sm text-gray-600">{formattedDate}</strong>
      </div>
    </div>
  );
};

export default RecommendationCard;