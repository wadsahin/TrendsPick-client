import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useAuth();
  if (loading) {
    return setLoading(true);
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/signIn"></Navigate>
  );
};

export default PrivateRoute;