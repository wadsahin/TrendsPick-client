import { Outlet } from "react-router-dom";
import Header from "../pages/common/Header";
import Footer from "../pages/common/Footer";
import { useAuth } from "../hook/useAuth";

const Root = () => {
  const { loading } = useAuth();
  return (
    <div>
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Dynamic routes */}
      <div className="mb-10 mt-20 min-h-screen">
        <div className="text-center">
          {
            loading && <span className="loading loading-bars loading-md my-3"></span>
          }
        </div>
        <Outlet />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;