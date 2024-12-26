import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const {pathname} = useLocation();
  // console.log(pathname)
  if (loading) {
    // return setLoading(true);
    return <span className="loading loading-bars loading-md my-3 hidden"></span>
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/signIn" state={pathname}></Navigate>
  );
};

export default PrivateRoute;