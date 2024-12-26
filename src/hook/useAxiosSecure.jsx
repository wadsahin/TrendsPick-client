import axios from "axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
})

const useAxiosSecure = () => {
  const {userLogout, setLoading} = useAuth()
  const navigate = useNavigate();
  axiosInstance.interceptors.response.use(response =>{
    return response;
  }, error => {
    console.log("Error caught into interceptors");
    if(error.status === 401 || error.status === 403){
      // Logout the user
      userLogout()
      .then( () => {
        console.log("Logged out user");
        setLoading(false);
        navigate('/signIn');
      })
      .catch(error => console.log(error))
    }
    return Promise.reject(error)
  })

  return axiosInstance;
};

export default useAxiosSecure;