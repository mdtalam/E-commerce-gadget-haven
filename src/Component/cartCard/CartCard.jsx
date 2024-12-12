import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from "react-icons/ri";

const CartCard = ({ product,handleRemove }) => {
  const {product_id, product_title, product_image, price,category, description } = product;
  return (
    <div className="md:w-[800px] lg:w-[1200px] p-8 rounded-xl shadow-2xl mb-8 mx-auto">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-8">
          <div>
            <img className="w-[200px] h-[150px] rounded-xl" src={product_image} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl lg:text-2xl font-bold">{product_title}</h1>
            <p className="text-md md:text-lg lg:text-lg text-gray-500">{description}</p>
            <p className="text-md md:text-lg lg:text-lg text-gray-500">Category: {category}</p>
            <p className="text-md md:text-xl lg:text-xl font-bold">Price: $ {price}</p>
          </div>
        </div>
        <button onClick={()=> handleRemove(product_id)}>
          <RiDeleteBin6Line className="text-2xl text-red-600 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};
CartCard.propTypes={
    product: PropTypes.object,
    handleRemove: PropTypes.func
}

export default CartCard;
