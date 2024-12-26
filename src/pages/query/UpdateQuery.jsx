import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateQuery = () => {
  const query = useLoaderData();
  const navigate = useNavigate();
  // console.log(query);
  const { prod_name, prod_brand, prod_image, query_title, reason } = query;
  const { id } = useParams();

  const handleUpdateQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const prod_name = form.prod_name.value;
    const prod_brand = form.prod_brand.value;
    const prod_image = form.prod_image.value;
    const query_title = form.query_title.value;
    const reason = form.reason.value;

    const updateInfo = {
      prod_name,
      prod_brand,
      prod_image,
      query_title,
      reason,
    };
    // console.log(updateInfo);
    // Update request
    fetch(`https://product-recommendation-server-one.vercel.app/update-query/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateInfo),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your query has been updated successfully",
            icon: "success"
          });
          navigate("/my-queries");
        }
      })

  }
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-5">Update your query here</h2>
      <hr />
      <div className="card bg-base-100 w-full max-w-4xl mx-auto my-5 shrink-0">
        <form onSubmit={handleUpdateQuery} className="card-body">
          {/* row 1 */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <input type="text" name="prod_name" defaultValue={prod_name} placeholder="product name" className="input input-bordered" required />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Product brand</span>
              </label>
              <input type="text" name="prod_brand" defaultValue={prod_brand} placeholder="product brand" className="input input-bordered" required />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Product image</span>
              </label>
              <input type="url" name="prod_image" defaultValue={prod_image} placeholder="product image" className="input input-bordered" required />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Query title</span>
              </label>
              <input type="text" name="query_title" defaultValue={query_title} placeholder="query title" className="input input-bordered" required />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Boycotting reason</span>
              </label>
              <input type="text" name="reason" defaultValue={reason} placeholder="boycotting reason" className="input input-bordered" required />
            </div>
          </div>

          <div className="form-control mt-6 w-fit mx-auto">
            <button className="btn bg-orange-400">Update Query</button>
          </div>
        </form>
        <Link to="/my-queries" className="btn btn-neutral btn-sm w-fit mx-auto">Cancel</Link>
      </div>
    </div>
  );
};

export default UpdateQuery;