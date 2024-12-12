import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from '../../assets/assets/favicon-16x16.png';
import { getAllProduct } from "../../Utilitiy/LocalStorage";
import { getAllWishlist } from "../../Utilitiy/WishListStorage";
import './Navbar.css';

const Navbar = () => {
  const [cartCount,setCartCount] = useState(0);
  const [wishlistCount,setWishlistCount] = useState(0)

  useEffect(()=>{
    const updateCounts = () => {
      const cart = getAllProduct();
    setCartCount(cart?.length)
    const wishCount = getAllWishlist();
    setWishlistCount(wishCount?.length)
    };

    updateCounts();

    const intervalId = setInterval(updateCounts, 500);

    return () => clearInterval(intervalId);
  },[]);

  const location = useLocation();

  
  

  const pathStyles = {
    "/productDetails": "bg-white text-black",
    "/statistics": "bg-white text-black",
    "/dashboard": "bg-white text-black",
    "/customerService": "bg-white text-black",
    "/dashboard/cart": "bg-white text-black",
    "/dashboard/wishlist": "bg-white text-black"
  }

  const isProductDetails = location.pathname.startsWith('/productDetails');

  const backgroundColor = isProductDetails || pathStyles[location.pathname] ? "bg-white text-black" : "bg-[#9538E2]";



  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/customerService">Customer Service</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className={`navbar ${backgroundColor} rounded-t-3xl mt-4 p-2 md:p-5 lg:p-5`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-5" src={logoImg} alt="Logo" />
          <Link to="/" className={`text-xl font-bold hidden md:block lg:block ${backgroundColor === 'bg-white text-black' ? 'text-black' : 'text-white'}`}>Gadget Heaven</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal text-lg gap-5 ${backgroundColor === 'bg-white text-black' ? 'text-black' : 'text-white'}`}>{links}</ul>
        </div>
        <div className="navbar-end space-x-4 relative ">
          <NavLink className="rounded-full p-2 md:p-4 lg:p-4 bg-gray-100">
      
             <span className="absolute -top-4 right-10 md:-top-2 md:right-16 lg:-top-2 lg:right-16 rounded-badge bg-gray-300 text-red-600 px-2">{cartCount}</span>
            <MdOutlineShoppingCart className="text-xl"></MdOutlineShoppingCart></NavLink>
          <NavLink className="rounded-full p-2 md:p-4 lg:p-4 bg-gray-100">
          <span className="lg:block absolute -top-4 -right-3 md:-top-2 md:-right-2 lg:-top-2 lg:-right-2 rounded-badge bg-gray-300 text-red-600 px-2">{wishlistCount}</span>
          <FaRegHeart className="text-lg"></FaRegHeart></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
