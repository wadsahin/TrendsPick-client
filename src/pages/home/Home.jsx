import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import RecentQueryCard from "../../components/RecentQueryCard";
import OurPartners from "../../components/OurPartners";
import Careers from "../../components/Careers";
import Faq from "./Faq";

const Home = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    axios.get("https://product-recommendation-server-one.vercel.app/recent-queries")
      .then(res => {
        // console.log(res.data);
        setQueries(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  return (
    <div className="bg-gray-100 pb-5 mt-[72px]">
      {/* Slider */}
      <Carousel />
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="mb-10">
          <h2 className="text-center mt-5 text-4xl font-semibold">Recent Queries</h2>
          <p className="border-b-2 border-teal-600 w-72 mx-auto mt-3"></p>
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

      {/* Extra sections */}
      <div className="w-11/12 lg:w-10/12 mx-auto my-10">
        {/* Query Partners section */}
        <div>
          <OurPartners />
        </div>
        {/* Careers */}
        <div className="mt-16">
          <Careers />
        </div>
        {/* Faq section */}
        <div className="mt-16">
          <Faq />
        </div>
      </div>

    </div>
  );
};

export default Home;