import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuth } from "../../hook/useAuth";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, userLogout } = useAuth();

  // Handle user logout
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        userLogout()
          .then(() => {
            Swal.fire({
              title: "Logout!",
              text: "Logged-out successfully!",
              icon: "success"
            });
          })
          .catch(error => {
            console.log("ERROR From Logout", error.code);
          })


      }
    });

  }

  const links = <>
    <div className="flex flex-col gap-2 md:gap-5 lg:flex-row  text-base font-medium">

      {
        user ?
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/queries">Queries</NavLink>
            <NavLink to="/recommendations-for-me">Recommendations For Me</NavLink>
            <NavLink to="/my-queries">My Queries</NavLink>
            <NavLink to="/my-recommendations">My recommendations</NavLink>
            {/* <button onClick={handleLogout} className="btn btn-error text-white">Logout</button>  */}
          </>
          : <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/queries">Queries</NavLink>
            {/* <Link to="/signIn" className="btn btn-warning text-white text-base">Login</Link> */}
          </>
      }
    </div>
  </>
  return (
    <div className="navbar justify-between p-0 bg-teal-500 lg:px-5 fixed z-30 bg-opacity-90 top-0">
      <div className="navbar-start w-fit">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-md z-[50] mt-4 ml-1 w-52 p-2 bg-teal-500 bg-opacity-90">
            {links}
            {
              user ? <button onClick={handleLogout} className="btn btn-error btn-sm my-2 text-white">Logout</button> : <Link to="/signIn" className="btn btn-warning btn-sm my-2 text-white text-base">Login</Link>
            }
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          <img className="w-28" src={logo} alt="logo" />
          <a className="text-3xl font-semibold text-white">TrendPicks</a>
        </div>
      </div>
      <div className="hidden lg:flex gap-8 ">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
        {
          user ? <button onClick={handleLogout} className="btn btn-error text-white">Logout</button> : <Link to="/signIn" className="btn bg-orange-400 border-none text-white text-base">Login</Link>
        }

      </div>
    </div>
  );
};

export default Navbar;