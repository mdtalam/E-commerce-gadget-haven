import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import { getAllWishlist, removeFromWishlist } from "../../Utilitiy/WishListStorage";
import WishlistCard from "../Wishlist card/WishlistCard";


const WishList = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(()=> {
        const wishlist = getAllWishlist();
        setWishlistItems(wishlist);
    },[])

    const handleRemove = (id) => {
        removeFromWishlist(id);
        const updatedWishlist = getAllWishlist();
        setWishlistItems(updatedWishlist)
    };


  return (
    <div>
        <Helmet>
            <title>
                Gadget Heaven | Dashboard | Wishlist
            </title>
        </Helmet>
        <div className="flex mx-28 mb-8">
        <h1 className="text-2xl font-bold">WishList</h1>
        </div>
      {
        wishlistItems?.map(wishProduct => <WishlistCard key={wishProduct.product_id} wishProduct={wishProduct} handleRemove={handleRemove}></WishlistCard>)
      }
    </div>
  );
};

export default WishList;