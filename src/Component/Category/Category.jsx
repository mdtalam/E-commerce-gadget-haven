/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Category = ({categories}) => {
  return (
    <div className="menu bg-white shadow-xl md:w-56 lg:w-56 rounded-2xl my-4 p-4">
      <NavLink to="/category/all" className={({isActive})=> `${isActive ? 'active bg-[#9538E2] font-bold text-white my-2 text-lg px-6 py-2 rounded-3xl':'bg-base-200 my-2 text-lg px-6 py-2 rounded-3xl'}`}>All Products</NavLink>
        {
           
            categories?.map(category => (<NavLink className={({isActive})=> `${isActive ? 'active bg-[#9538E2] font-bold text-white my-2 text-lg px-6 py-2 rounded-3xl':'bg-base-200 my-2 text-lg px-6 py-2 rounded-3xl'}`} to={`/category/${category.category}`} key={category.category_id}>{category.category_name}</NavLink>))
        }
    </div>
  );
};

export default Category;
