import axios from "axios";
import { useAuth } from "../../hook/useAuth";
import Swal from "sweetalert2";

const AddQueries = () => {
  // User information
  const { user } = useAuth();
  const { displayName, email, photoURL } = user;
  // console.log(displayName, email, photoURL);


  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const prod_name = form.prod_name.value;
    const prod_brand = form.prod_brand.value;
    const prod_image = form.prod_image.value;
    const query_title = form.query_title.value;
    const reason = form.reason.value;
    // console.log()
    const queryInfo = {
      prod_name,
      prod_brand,
      prod_image,
      query_title,
      reason,
      user_name: displayName,
      user_email: email,
      user_photo: photoURL,
      createdAt: Date.now(),
      recommendationCount: 0,
    };
    // console.log(queryInfo);

    // Insert data to db
    axios.post("http://localhost:5000/add-query", queryInfo)
      .then(res => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added!",
            text: "Your query added successfully!",
            icon: "success"
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto my-5 shrink-0">
      <form onSubmit={handleAddQuery} className="card-body">
        {/* row 1 */}
        <div className="flex gap-5">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <input type="text" name="prod_name" placeholder="product name" className="input input-bordered" required />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Product brand</span>
            </label>
            <input type="text" name="prod_brand" placeholder="product brand" className="input input-bordered" required />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex gap-5">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Product image</span>
            </label>
            <input type="url" name="prod_image" placeholder="product image" className="input input-bordered" required />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Query title</span>
            </label>
            <input type="text" name="query_title" placeholder="query title" className="input input-bordered" required />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex gap-5">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Boycotting reason</span>
            </label>
            <input type="text" name="reason" placeholder="boycotting reason" className="input input-bordered" required />
          </div>
        </div>

        <div className="form-control mt-6 w-fit mx-auto">
          <button className="btn bg-lime-500 text-white">Add Query</button>
        </div>
      </form>
    </div>
  );
};

export default AddQueries;