import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import Signup from "../pages/auth/Signup";
import PrivateRoute from "./PrivateRoute";
import MyQueries from "../pages/query/MyQueries";
import Queries from "../pages/query/Queries";
import MyRecommendations from "../pages/recommendation/MyRecommendations";
import RecommendationsForMe from "../pages/recommendation/RecommendationsForMe";
import AddQueries from "../pages/query/AddQueries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/my-queries",
        element: <PrivateRoute><MyQueries /></PrivateRoute>,
      },
      {
        path: "/add-queries",
        element: <PrivateRoute><AddQueries /></PrivateRoute>,
      },
      {
        path: "/recommendations-for-me",
        element: <RecommendationsForMe />,
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendations />,
      },
    ],
  },
]);
