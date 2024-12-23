import { useLoaderData } from "react-router-dom";
import QueriesCard from "../../components/QueriesCard";

const Queries = () => {
  const queries = useLoaderData();
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {
          queries.map(query => <QueriesCard key={query._id} query={query} />)
        }
      </div>
    </div>
  );
};

export default Queries;