import { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";
import axios from "axios";

const RecommendationsForMe = () => {
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get(`https://product-recommendation-server-one.vercel.app/recommendations-for-me?email=${user?.email}`)
      .then(res => {
        // console.log(res.data);
        setRecommendations(res.data);
      })
      .catch(error => {
        console.log(error.code)
      })
  }, [user])
  return (
    <div className="overflow-x-auto w-11/12 md:w-10/12 mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Product details</th>
            <th>Reason</th>
            <th>My Query Id</th>
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
                    <div className="text-sm opacity-70"><span className="font-medium text-black text-base">Recommender:</span> {recommendation.recommender_name}</div>
                  </div>
                </div>
              </td>
              <td>
                <span>{recommendation.rec_prod_name}</span>
                <br />
                <span className="font-medium">{recommendation.rec_prod_brand}</span>
              </td>
              <td>
                {recommendation.rec_reason}
              </td>
              
              <th>
                id: {recommendation.queryId}
              </th>
            </tr>)
            : <></>}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationsForMe;