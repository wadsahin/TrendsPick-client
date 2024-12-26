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
import QueryDetails from "../pages/query/QueryDetails";
import UpdateQuery from "../pages/query/UpdateQuery";

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
        loader: () => fetch("https://product-recommendation-server-one.vercel.app/all-queries"),
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
        path: `/query-update/:id`,
        element: <PrivateRoute><UpdateQuery /></PrivateRoute>,
        loader: ({params}) => fetch(`https://product-recommendation-server-one.vercel.app/query-update/${params.id}`)
      },
      {
        path: "/query-details/:id",
        element: <PrivateRoute><QueryDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`https://product-recommendation-server-one.vercel.app/query-details/${params.id}`),
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
