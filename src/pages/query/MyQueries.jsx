import { Link } from "react-router-dom";
import banner from "../../assets/slider/slider-img-4.jpg";
import { useAuth } from "../../hook/useAuth";
const MyQueries = () => {
  const {user} = useAuth();
  // console.log(user)
  return (
    <div>
      {/* header start */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-2 text-6xl font-bold"><span className="text-orange-400">Hello</span> there</h1>
            <div className="border-b mb-3"></div>
            <p className="mb-5">
              All of the queries you have added can show at bellow. And if you want to add new query, You can hit on Add Queries button.
            </p>
            <Link to="/add-queries" className="btn btn-primary">Add Queries</Link>
          </div>
        </div>
      </div>
      {/* header end */}

      {/* my queries section */}
      <div>
        <h2 className="text-center mt-5 text-4xl font-semibold">My Queries</h2>
        <p className="border-b-2 border-b-orange-500 w-56 mx-auto mt-3"></p>
        {/* all queries load here in card format */}
        
      </div>
    </div>
  );
};

export default MyQueries;