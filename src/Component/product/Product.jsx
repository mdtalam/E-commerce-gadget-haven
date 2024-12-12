import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const {
    product_title,
    product_id,
    product_image,
    price,
  } = product || {};
  return (
    <div>
      <div className="card bg-base-100 md:w-80 lg:w-80 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            
            src={product_image}
            alt="Shoes"
            className="rounded-xl w-[250px] h-[200px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-lg">Price: $ {price}</p>
          <div className="card-actions">
            <Link to={`/productDetails/${product_id}`} className="btn border- border-[#9538E2]  hover:bg-[#9538E2]">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Product.propTypes ={
    product: PropTypes.array
}

export default Product;
