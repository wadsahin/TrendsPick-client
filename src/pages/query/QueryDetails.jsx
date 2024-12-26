import { FcLike } from "react-icons/fc";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import RecommendationCard from "../../components/RecommendationCard";

const QueryDetails = () => {
  const [recommendations, setRecommendations] = useState([]);
  // console.log(recommendations)
  const [query, setQuery] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  // console.log(query);
  const { _id, prod_name, prod_brand, prod_image, query_title, reason, user_name, user_email, user_photo, createdAt, recommendationCount } = query;

  // customize creation time
  const date = new Date(createdAt);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  useEffect(() => {
    fetch(`https://product-recommendation-server-one.vercel.app/query-details/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setQuery(data);
      })
  }, [id])


  // handle Add Recommendation
  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const rec_title = form.rec_title.value;
    const rec_prod_name = form.rec_prod_name.value;
    const rec_prod_image = form.rec_prod_image.value;
    const rec_reason = form.rec_reason.value;
    const recommendationInfo = {
      rec_title,
      rec_prod_name,
      rec_prod_image,
      rec_reason,
      queryId: _id,
      query_title,
      prod_name,
      user_name,
      user_email,
      recommender_name: user?.displayName,
      recommender_email: user?.email,
      recommendedAt: Date.now(),
    };

    // console.log(recommendationInfo);
    // Add recommendation into DB
    axios.post("https://product-recommendation-server-one.vercel.app/add-recommendation", recommendationInfo)
      .then(res => {
        // console.log(res.data);
        if (res.data.insertedId) {
          // Increase Recommendation Count
          fetch(`https://product-recommendation-server-one.vercel.app/recommendation-count/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json"
            },
          })
            .then(res => res.json())
            .then(data => {
              // console.log(data);
              if (data.modifiedCount > 0) {
                // Load All Recommendations 
                axios.get(`https://product-recommendation-server-one.vercel.app/recommendations/${_id}`)
                  .then(res => {
                    setRecommendations(res.data);
                  })
                  .catch(error => {
                    console.log(error);
                  })
                // Finished data load
                Swal.fire({
                  title: "Added!",
                  text: "Your recommendation added successfully!",
                  icon: "success"
                })
              }
            })
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Load all recommendation based on particular query
  useEffect(() => {

    if(!_id) return;
    axios.get(`https://product-recommendation-server-one.vercel.app/recommendations/${_id}`)
      .then(res => {
        // console.log(res.data);
        setRecommendations(res.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, [_id]);



  return (
    <div className="card card-compact bg-base-100 max-w-3xl mx-auto shadow-xl my-10">
      <div className="flex flex-col md:flex-row-reverse md:py-10 md:px-5">
        <figure>
          <img
            className='h-80'
            src={prod_image} />
        </figure>
        <div className="card-body sm:mx-10 md:mx-0">
          <div className="flex items-center gap-2">
            <img className="w-12 h-12 rounded-full" src={user_photo} alt="" />
            <h4 className="bg-gray-300 px-2 rounded-sm font-medium">{user_name}</h4>
            <strong>{formattedDate}</strong>
          </div>
          <h2 className="card-title">{prod_name}</h2>
          <p><span className="text-base font-medium">Brand: </span> <span className="font-mono">{prod_brand}</span></p>
          <h3 className="text-xl font-semibold font-serif">{query_title}</h3>
          <p><span className="text-base font-medium">Boycotting reason:</span> {reason}</p>
          <div className="card-actions mt-5">
            <button className="btn text-xl"><FcLike size={26} /> {recommendationCount}</button>
          </div>
        </div>
      </div>
      {/* Recommendation form */}
      <div className="sm:px-5">
        <hr className="border-dashed mt-5" />
        <div className="card bg-base-100 w-full max-w-4xl mx-auto my-5 shrink-0">
          <h3 className="text-lg font-semibold ml-2">Add your recommendation here</h3>
          <form onSubmit={handleAddRecommendation} className="card-body">
            {/* row 1 */}
            <div className="flex flex-col sm:flex-row gap-5 mb-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Recommendation Title</span>
                </label>
                <input type="text" name="rec_title" placeholder="recommendation title" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Recommendation product name</span>
                </label>
                <input type="text" name="rec_prod_name" placeholder="product name" className="input input-bordered" required />
              </div>
            </div>
            {/* row 2 */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Recommendation product image</span>
                </label>
                <input type="url" name="rec_prod_image" placeholder="product image" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Recommendation reason</span>
                </label>
                <input type="text" name="rec_reason" placeholder="recommendation reason" className="input input-bordered" required />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-lime-500 text-white text-base">Add Recommendation</button>
            </div>
          </form>
        </div>
      </div>
      {/* All recommendation of this query */}
      <div className="pt-2 pb-10 rounded-md bg-gray-100">
        <p className="mt-2 ml-3">All recommendations....</p>
        {
          recommendations.length ?
            recommendations.map(recommendation => <RecommendationCard key={recommendation._id} recommendation={recommendation} />)
            : <p className="text-xl font-medium ml-3">No recommendation yet...</p>
        }
      </div>
    </div>
  );
};

export default QueryDetails;