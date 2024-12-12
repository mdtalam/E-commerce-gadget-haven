import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../product/Product";

const ProductsCard = () => {
  const { category } = useParams();
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!category || category === 'all') {
      setProducts(data);
    } else {
      const filteredByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {
        products?.length > 0 ? (products?.map(product=><Product key={product.product_id} product={product}></Product>)) : (
            <p className="text-4xl font-bold text-center grid col-span-3">No products found for this category.</p>
        )   
    }
    </div>
  );
};

export default ProductsCard;
