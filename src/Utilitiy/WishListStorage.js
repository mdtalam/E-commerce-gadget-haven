import toast from "react-hot-toast";

const getAllWishlist = () => {
    const wishlists = localStorage.getItem('wishlist');
    if (wishlists) {
        try {
            return JSON.parse(wishlists) || []; // Parse and return or return empty array if parsing fails
        } catch (error) {
            console.error("Error parsing wishlist from localStorage:", error);
            return []; // Return empty array if JSON parsing fails
        }
    } else {
        return []; // Return empty array if wishlists is null
    }
};



// add product wishlist
const addToWishlist = (product) => {
    const wishlist = getAllWishlist();
    const isExist = wishlist?.find(item => item.product_id === product.product_id);

    if(!isExist){
        wishlist?.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        toast.success('Product successfully added to wishlist!',{
            duration: 4000,
            position: 'top-center',
        });
    }
    else{
        toast.error('Product is already in the wishlist.',{
            duration: 4000,
            position: 'top-center',
        });
    }
};

// remove wishlist 
const removeFromWishlist = (id) => {
    const wishlist = getAllWishlist();
    const updatedWishlist = wishlist.filter(product => product.product_id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.success('Product removed from wishlist!',{
        duration: 4000,
        position: 'top-center'
    });
};
export { addToWishlist, getAllWishlist, removeFromWishlist };

