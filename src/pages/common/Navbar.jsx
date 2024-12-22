import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const user = "sahin";
  const links = <>
    <div className="flex flex-col gap-2 md:gap-5 lg:flex-row  text-base font-medium">

      {
        user ?
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/queries">Queries</NavLink>
            <NavLink to="/recommendations-for-me">Recommendations For Me</NavLink>
            <NavLink to="/my-queries">My Queries</NavLink>
            <NavLink to="/my-recommendations">My recommendations</NavLink>
          </>
          : <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/queries">Queries</NavLink>
          </>
      }
    </div>
  </>
  return (
    <div className="navbar justify-between bg-base-300 lg:px-5">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          <img className="w-28" src={logo} alt="logo" />
          <a className="text-3xl font-semibold">TrendPick</a>
        </div>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div> */}
      <div className="hidden lg:flex gap-8 ">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
        <Link to="/signIn" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;