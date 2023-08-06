import { Outlet } from "react-router-dom";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import ContactHeader from "../component/layout/ContactHeader";

const MainContent = () => {
  return (
    <div>
      <div>
      <ContactHeader/>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainContent;
