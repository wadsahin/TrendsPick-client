import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

export const useAuth = () =>{
  const context = useContext(AuthContext);

  return context;
}