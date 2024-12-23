import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();
  // if(loading){

  // }

  if(user){
    return children;
  }

  return (
    <Navigate to="/signIn"></Navigate>
  );
};

export default PrivateRoute;