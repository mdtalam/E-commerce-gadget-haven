import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { GiSettingsKnobs } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import modalIcon from '../../assets/assets/Group.png';
import { getAllProduct, removeProduct } from "../../Utilitiy/LocalStorage";
import CartCard from "../cartCard/CartCard";

const Cart = () => {
  const [products, setProduct] = useState([]);
  const [sortOrder,setSortOrder] = useState('')
  const [totalPrice,setTotalPrice] = useState(0);
  const [finalTotalPrice,setFinalTotalPrice] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const cart = getAllProduct();
    setProduct(cart);
    calculateTotalPrice(cart);
  }, []);

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((acc,product) => acc + product.price, 0);
    setTotalPrice(total)
  }

  const handleRemove = id =>{
    removeProduct(id)
    const cart = getAllProduct();
    setProduct(cart);
    calculateTotalPrice(cart)
  }

  const handleSortByPrice = () =>{
    const sortedProducts = [...products].sort((a,b)=>{
        if(sortOrder === "asc"){
            return a.price - b.price;
        }
        else{
            return b.price - a.price;
        }
    });
    setProduct(sortedProducts);
    setSortOrder(sortOrder === 'asc'? 'desc': 'asc');
    
  }

  const handlePurchase = () => {
    setFinalTotalPrice(totalPrice);
    setIsModalOpen(true);
    setProduct([]);
    setTotalPrice(0);
    localStorage.removeItem('cart');
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  }

  return (
    <div>
        <Helmet>
            <title>
                Gadget Heaven | Dashboard | cart
            </title>
        </Helmet>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mb-10 mx-28">
        <div>
          <h1 className="text-2xl font-bold mb-4 md:mb-0 lg:mb-0">Cart</h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center gap-5">
          <h1 className="text-md md:text-2xl lg:text-2xl font-bold text-center">Total cost: ${totalPrice.toFixed(2)}</h1>
          <button onClick={handleSortByPrice} className="btn bg-[#9538E2] hover:bg-[#9538E2] hover:text-white text-lg text-white px-16 md:px-10 lg:px-10 rounded-full">
            Sort <span className="hidden md:block lg:block">by Price</span>
            <GiSettingsKnobs className="hidden md:block lg:block text-xl font-bold text-white" />
          </button>
          <button
          disabled={totalPrice === 0}
          onClick={handlePurchase}
          className="btn btn-outline text-[#9538E2] hover:bg-[#9538E2] hover:text-white text-lg px-10 rounded-full">
            Purchase
          </button>
        </div>
      </div>
      {products.length > 0 ? (
        products.map((product) => (
          <CartCard key={product.product_id} product={product} handleRemove={handleRemove} />
        ))
      ) : (
        <p className="text-4xl font-bold text-center">Your cart is empty.</p>
        
      )}
      {isModalOpen && (
        <div>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96 space-y-2">
            <img className="mx-auto mb-2" src={modalIcon} alt="" />
            <h3 className="text-2xl font-bold">Payment Successfully</h3>
            <div className="divider"></div>
            <p className="mb-4 text-lg">Your purchase was successful.</p>
            <p>Total: ${finalTotalPrice.toFixed(2)}</p>
            <button onClick={handleCloseModal} className="btn w-full rounded-3xl bg-gray-400 hover:bg-[#9538E2] hover:text-white text-lg">
              Close
            </button>
          </div>
        </div>
      
        </div>
      )}

    </div>
  );
};

export default Cart;
