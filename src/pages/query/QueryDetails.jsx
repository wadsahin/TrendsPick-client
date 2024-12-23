import { FcLike } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const QueryDetails = () => {
  const { user } = useAuth();
  const query = useLoaderData();
  const { _id, prod_name, prod_brand, prod_image, query_title, reason, user_name, user_email, user_photo, createdAt, recommendationCount } = query;

  // customize creation time
  const date = new Date(createdAt);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

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
    console.log(recommendationInfo);

  }

  return (
    <div className="card card-compact bg-base-100 max-w-3xl mx-auto shadow-xl my-10">
      <div className="flex flex-col md:flex-row-reverse md:py-10 md:px-5">
        <figure>
          <img
            className='h-80'
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
          <div className="card-actions mt-5">
            <button className="btn text-xl"><FcLike size={26} /> {recommendationCount}</button>
          </div>
        </div>
      </div>
      {/* Recommendation form */}
      <div className="sm:px-5">
        <hr className="border-dashed mt-5" />
        <div className="card bg-base-100 w-full max-w-4xl mx-auto my-5 shrink-0">
          <h3 className="text-lg font-semibold">Add your recommendation bellow</h3>
          <form onSubmit={handleAddRecommendation} className="card-body">
            {/* row 1 */}
            <div className="flex gap-5 mb-5">
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
            <div className="flex gap-5">
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
        <div className="w-11/12 mx-auto mt-1 bg-gray-50 p-2">
          <p>Shain</p>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;