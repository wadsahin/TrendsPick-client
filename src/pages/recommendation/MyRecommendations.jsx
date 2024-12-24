import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";

const MyRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { user } = useAuth();
  // console.log(user)
  useEffect(() => {
    axios.get(`http://localhost:5000/my-recommendations?email=${user?.email}`)
      .then(res => {
        // console.log(res.data);
        setRecommendations(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [user]);

  const handleDelete = (rec_id, queryId) =>{
    console.log({rec_id, queryId})
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