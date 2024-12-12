import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [activeButton,setActiveButton] = useState('cart');
    const navigate = useNavigate();

    const handleNavigation = (path,button)=>{
        navigate(path);
        setActiveButton(button);
    }

    


  return (
    <div>
        <Helmet>
            <title>
                Gadget Heaven | Dashboard
            </title>
        </Helmet>
      {/* dashboard banner */}
      <div className="mb-10 hero bg-[#9538E2] pb-6 md:pb-20 lg:pb-20 pt-4 md:pt-12 lg:pt-12 container mx-auto">
        <div className="hero-content text-center">
          <div className="space-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-3xl text-white font-bold">Dashboard</h1>
            <p className="py-2 text-md md:text-md lg:text-lg text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex justify-center items-center gap-4">
            <button onClick={()=> handleNavigation('/dashboard/cart','cart')} className={`btn hover:bg-[#9538E2] hover:text-white text-lg  px-10 rounded-full ${activeButton === 'cart'? 'bg-white text-[#9538E2]': 'btn-outline text-white'}`}>Cart</button>
            <button onClick={()=> handleNavigation('/dashboard/wishlist','wishlist')} className={`btn hover:bg-[#9538E2] hover:text-white text-lg px-10 rounded-full ${activeButton === 'wishlist'? 'bg-white text-[#9538E2]': 'btn-outline text-white'}`}>Wishlist</button>
          </div>
          </div>
          
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
