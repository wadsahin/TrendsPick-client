import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyQueryCard = ({ query, myQueries, setMyQueries }) => {
  const { _id, prod_name, prod_brand, prod_image, query_title, reason } = query;

  // Handle Query Delete
  const handleQueryDelete = (id) => {
    // console.log("Click delete", id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-query/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myQueries.filter(myQuery => myQuery._id !== _id);
              setMyQueries(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your query has been removed.",
                icon: "success"
              });
            }
          })
        
      }
    });


  }

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
          <Link to={`/query-details/${_id}`} className="btn bg-teal-600 text-white">View Details</Link>
          <button className="btn btn-warning">Update</button>
          <button onClick={() => handleQueryDelete(_id)} className="btn btn-error text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCard;