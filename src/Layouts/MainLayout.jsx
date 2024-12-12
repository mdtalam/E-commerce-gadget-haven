import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

const MainLayout = () => {
  const targetSectionRef = useRef(null);
  const handleUpdate = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="max-w-[1444px] mx-auto px-5">
      <Toaster></Toaster>
      {/* navbar */}
      <Navbar></Navbar>
      {/* dynamic section*/}
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet context={{handleUpdate,targetSectionRef}}></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
