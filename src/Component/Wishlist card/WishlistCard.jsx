import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistCard = ({ wishProduct, handleRemove }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    category,
    description,
  } = wishProduct;
  return (
    <div>
      <div className="md:w-[800px] lg:w-[1200px] p-8 rounded-2xl shadow-2xl mb-8 mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-8">
            <div>
              <img
                className="w-[200px] h-[150px] rounded-xl"
                src={product_image}
                alt=""
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-bold">{product_title}</h1>
              <p className="text-md md:text-lg lg:text-lg text-gray-500">{description}</p>
              <p className="text-md md:text-lg lg:text-lg text-gray-500">Category: {category}</p>
              <p className="text-md md:text-xl lg:text-xl font-bold">Price: $ {price}</p>
              <button className='btn text-md md:text-lg lg:text-lg font-bold text-white px-4 py-2 rounded-full flex items-center bg-[#9538E2] hover:bg-[#9538E2]'>Add to Cart</button>
            </div>
          </div>
          <button onClick={() => handleRemove(product_id)}>
            <RiDeleteBin6Line className="text-2xl text-red-600 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

WishlistCard.propTypes ={
    wishProduct: PropTypes.object,
    handleRemove: PropTypes.func
}

export default WishlistCard;
