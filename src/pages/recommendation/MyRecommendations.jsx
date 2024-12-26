import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";

const MyRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // console.log(user)
  useEffect(() => {
    axiosSecure.get(`http://localhost:5000/my-recommendations?email=${user?.email}`)
      .then(res => {
        // console.log(res.data);
        setRecommendations(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [user]);

  const handleDelete = (rec_id, queryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my-recommendation-delete/${rec_id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              const remaining = recommendations.filter(rec => rec._id !== rec_id);
              setRecommendations(remaining);

              // Decreasing recommendation count
              fetch(`http://localhost:5000/recommendation-decrease/${queryId}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json"
                }
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                  Swal.fire({
                    title: "Deleted & Decreased the count",
                    text: "Your recommendation has been deleted and decreased recommendation count",
                    icon: "success"
                  });
                }
              })

              
            }
          })

      }
    });


    // console.log({rec_id, queryId})
  }


  return (
    <div className="overflow-x-auto w-11/12 md:w-10/12 mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Recommendation Details</th>
            <th>Reason</th>
            <th>Query Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {recommendations.length ?
            recommendations.map(recommendation => <tr key={recommendation._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={recommendation.rec_prod_image}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{recommendation.rec_title}</div>
                    <div className="text-sm opacity-50">{recommendation.rec_prod_name}</div>
                  </div>
                </div>
              </td>
              <td>
                {recommendation.rec_reason}
              </td>
              <td>
                <span>{recommendation.query_title}</span>
                <br />
                <span className="font-medium">{recommendation.prod_name}</span>
              </td>
              <th>
                <button onClick={() => handleDelete(`${recommendation._id}`, `${recommendation.queryId}`)} className="btn btn-error text-white btn-xs">Delete</button>
              </th>
            </tr>)
            : <></>}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecommendations;