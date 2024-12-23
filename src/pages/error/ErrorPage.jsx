import { Link } from "react-router-dom";
import error_page from "../../assets/error/error-page.png";
const ErrorPage = () => {
  return (
    <div className="border min-h-screen flex items-center">
      <div className="w-8/12 mx-auto rounded-md text-center">
        <img src={error_page}
        className="w-full h-full"
        alt="" />
        <Link to="/" className="btn bg-orange-500 text-white mt-2">Go back</Link>
      </div>
    </div>
  );
};

export default ErrorPage;