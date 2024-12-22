import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const handleSignupForm = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({name, email, photo, password});
  }
  return (
    <div className="hero bg-base-200 min-h-screen w-11/12 lg:w-10/12 mx-auto my-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center flex-1 lg:text-left">
          <h2 className="text-4xl font-semibold mb-3">TrendPicks</h2>
          <p className="text-lg mb-3 text-gray-700">A platform for sharing knowledge and better understanding the world.</p>
          <p className="text-gray-500">By continuing you indicate that you agree to TrendPick's <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy.</span> </p>
          <div className="py-6">
            <button className="border border-teal-500 py-2 px-5 text-xl font-medium flex items-center gap-2 w-full justify-center">
              <FcGoogle size={28} />
              Continue with Google
            </button>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="card w-full flex-1">
          <form onSubmit={handleSignupForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-teal-700 text-lg text-white">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;