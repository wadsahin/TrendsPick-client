import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import RecentQueryCard from "../../components/RecentQueryCard";

const Home = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/recent-queries")
      .then(res => {
        // console.log(res.data);
        setQueries(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  return (
    <div>
      {/* Slider */}
      <Carousel />
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="mb-10">
          <h2 className="text-center mt-5 text-4xl font-semibold">Recent Queries</h2>
          <p className="border-b-2 border-b-orange-500 w-72 mx-auto mt-3"></p>
        </div>

        {
          queries.length ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {
                queries.map(query => <RecentQueryCard key={query._id} query={query} />)
              }
            </div>

            : <div>
              No data available!!
            </div>
        }


      </div>
    </div>
  );
};

export default Home;