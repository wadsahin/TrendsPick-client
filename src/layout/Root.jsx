import { Outlet } from "react-router-dom";
import Header from "../pages/common/Header";
import Footer from "../pages/common/Footer";

const Root = () => {
  return (
    <div>
      {/* Header */}
      <div>
        <Header />
      </div>
      {/* Dynamic routes */}
      <div className="my-10">
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