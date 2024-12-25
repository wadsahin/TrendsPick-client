import { Link } from "react-router-dom";
import banner from "../../assets/slider/slider-img-4.jpg";
import { useAuth } from "../../hook/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import MyQueryCard from "../../components/MyQueryCard";
const MyQueries = () => {
  const [myQueries, setMyQueries] = useState([]);
  const { user } = useAuth();
  // console.log(user)
  useEffect(() => {
    axios.get(`http://localhost:5000/my-queries?email=${user?.email}`)
      .then(res => {
        // console.log(res.data);
        setMyQueries(res.data);
      })
  }, [user])
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
            <Link to="/add-queries" className="btn bg-lime-600 text-white text-base">Add Queries</Link>
          </div>
        </div>
      </div>
      {/* header end */}

      {/* my queries section */}
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h2 className="text-center mt-5 text-4xl font-semibold">My Queries</h2>
        <p className="border-b-2 border-b-orange-500 w-56 mx-auto mt-3"></p>
        {/* all queries load here in card format */}
        {
          myQueries.length ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 my-10">
              {
                myQueries.map(query => <MyQueryCard key={query._id} query={query} myQueries={myQueries} setMyQueries={setMyQueries} />)
              }
            </div>
            : <div className="my-10">
              <h2 className="text-2xl font-semibold mb-5">There is no available queries or data.</h2>
              <Link to="/add-queries" className="btn btn-primary">Add Queries</Link>
            </div>
        }
      </div>
    </div>
  );
};

export default MyQueries;