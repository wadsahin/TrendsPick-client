import { useLoaderData } from "react-router-dom";
import QueriesCard from "../../components/QueriesCard";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { useState } from "react";

const Queries = () => {
  const queries = useLoaderData();
  const [searchInput, setSearchInput] = useState("");
  const [layout, setLayout] = useState(0);
  // console.log(searchInput);


  // Handle One Column Layout
  const handleOneColumnLayout = () => {
    setLayout(1);
  }
  // Handle Two Column Layout
  const handleTwoColumnLayout = () => {
    setLayout(2);
  }

  // Handle Three Column Layout
  const handleThreeColumnLayout = () => {
    setLayout(3);
  }
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto ">
      <div className="py-5 flex justify-between gap-5">
        {/* Search part */}
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <input onChange={(e) => setSearchInput(e.target.value.toLowerCase())} type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
        </div>
        {/* Toggle layout part */}
        <div className="hidden md:flex items-center gap-2">
          <button onClick={handleOneColumnLayout}><CiGrid2H size={28} /></button>
          <button onClick={handleTwoColumnLayout}><CiGrid2V size={28} /></button>
          <button className="hidden lg:flex" onClick={handleThreeColumnLayout}><IoGridOutline size={28} /></button>

        </div>
      </div>
      <hr className="border-teal-500" />
      <div className={`grid gap-8 my-10 ${layout == 0 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" || layout == 1 && "grid-cols-1 md:max-w-2xl lg:max-w-3xl md:mx-auto" || layout == 2 && "grid-cols-1 md:grid-cols-2" || layout == 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
        {/* {
          queries.map(query => <QueriesCard key={query._id} query={query} />)
        } */}
        {
          queries.filter(query => query.prod_name.toLowerCase().includes(searchInput)).map(query => <QueriesCard key={query._id} query={query} />)
        }
      </div>
    </div>
  );
};

export default Queries;