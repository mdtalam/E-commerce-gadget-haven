import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addProduct,
  getAllProduct
} from "../../Utilitiy/LocalStorage";
import { addToWishlist, getAllWishlist, removeFromWishlist } from "../../Utilitiy/WishListStorage";

const Details = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const [product, setProduct] = useState({});
  const [addCart, setAddCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const product = data?.find((product) => product.product_id === id);
    setProduct(product);
    const cart = getAllProduct();
    const isExist = cart?.find((item) => item.product_id === product.product_id);
    console.log(isExist);
    if (isExist) {
      setAddCart(true);
    }
  }, [data, id]);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  const handleAddToCart = (product) => {
    addProduct(product);
    setAddCart(true);
  };

  useEffect(()=>{
    const wishList = getAllWishlist();
    const exists = wishList?.find(item => item.product_id === product.product_id);
    setIsWishlisted(!!exists)
  },[product.product_id])


  const handleWishlistToggle = () => {
    if(isWishlisted){
        removeFromWishlist(product.product_id);
    }
    else{
        addToWishlist(product);
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="relative">
        <Helmet>
            <title>
                Gadget Heaven | Product Details
            </title>
        </Helmet>
      <div className="mb-10 md:mb-96 lg:mb-96 hero bg-[#9538E2] pb-6 md:pb-60 lg:pb-60 pt-4 md:pt-12 lg:pt-12 container mx-auto">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-3xl text-white font-bold">Product Details</h1>
            <p className="py-2 text-md md:text-lg lg:text-lg text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="md:absolute lg:absolute top-40 left-[16%] bg-white flex flex-col md:flex-row lg:flex-row items-center rounded-3xl p-8 shadow-2xl md:w-2/3 lg:w-2/3 gap-5">
        <div>
          <img className="w-[300px] rounded-3xl" src={product_image} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{product_title}</h1>
          <p className="text-lg md:text-xl lg:text-xl font-bold">Price: $ {price}</p>
          {availability ? (
            <p className="inline-block border border-green-400 bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm mb-2 text-md">
              In Stock
            </p>
          ) : (
            <p className="inline-block border border-red-500 bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm mb-2 text-md">
              Out of Stock
            </p>
          )}
          <p className="text-md md:text-lg lg:text-lg text-gray-500">{description}</p>
          <p className="text-lg font-bold">Specification:</p>
          <div className="text-md md:text-lg lg:text-lg text-gray-500">
            {Specification &&
              Specification?.map((p, idx) => <li key={idx}>{p}</li>)}
          </div>
          <p className="text-lg font-bold">Rating:</p>
          <div className="flex items-center gap-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-[#ffd700]"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-[#ffd700]"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-[#ffd700]"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-[#ffd700]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-[#ffd700]"
              />
            </div>
            <p className="bg-gray-200 rounded-3xl px-4 py-1 text-gray-600">
              {rating}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleAddToCart(product)}
              className={`text-lg font-bold ${
                addCart ? "bg-gray-400" : "bg-[#9538E2] hover:bg-[#9538E2]"
              } text-white px-4 py-2 rounded-full flex items-center`}
              disabled={addCart || !product.availability}
            >
              {addCart ? "Added to Cart" : "Add To Cart"}
              <MdOutlineShoppingCart className="text-xl ml-2"></MdOutlineShoppingCart>
            </button>
            <button
            disabled={isWishlisted}
            onClick={handleWishlistToggle} className={`btn ${isWishlisted ? 'bg-gray-400' : 'btn-outline'} rounded-full p-3 bg-white hover:bg-[#9538E2]`}
            >
              <FaRegHeart className="text-xl md:text-2xl lg:text-2xl shadow-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
