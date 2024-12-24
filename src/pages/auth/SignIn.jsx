import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import Swal from "sweetalert2";

const SignIn = () => {
  const navigate = useNavigate();
  // Get data from context
  const { loginWithGoogle, userLogin, setLoading } = useAuth();

  // Handle user email & password login
  const handleLoginForm = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // user login
    userLogin(email, password)
      .then(result => {
        // console.log(result.user);
        Swal.fire({
          title: "Logged-In!",
          text: "You have successfully Logged-In.",
          icon: "success"
        });
        navigate("/");
      })
      .catch(error => {
        // console.log(error.message);
        setLoading(false);
        Swal.fire({
          title: "ERROR!!",
          text: `${error.code}`,
          icon: "success",
        });
      })
  }

  // Handle google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(result => {
        if (result.user) {
          Swal.fire({
            title: "Logged-In with Google!",
            text: "You have successfully Logged-In.",
            icon: "success"
          });
          navigate("/");
        }
      })
      .catch(error => {
        if(error){
          setLoading(false);
          console.log("Error", error.code);
        }
      })
  }

  return (
    <div className="hero bg-base-200 min-h-screen w-11/12 lg:w-10/12 mx-auto my-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center flex-1 lg:text-left">
          <h2 className="text-4xl font-semibold mb-3">TrendPicks</h2>
          <p className="text-lg mb-3 text-gray-700">A platform for sharing knowledge and better understanding the world.</p>
          <p className="text-gray-500">By continuing you indicate that you agree to TrendPick's <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy.</span> </p>
          <div className="py-6">
            <button onClick={handleGoogleLogin} className="border border-green-400 py-2 px-5 text-xl font-medium flex items-center gap-2 w-full justify-center">
              <FcGoogle size={28} />
              Continue with Google
            </button>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="card w-full flex-1">
          <form onSubmit={handleLoginForm} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-400 text-lg text-white">Sign In</button>
              <p>Don't have any account? Please <Link className="underline text-blue-600 font-medium" to="/signup">Signup</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;