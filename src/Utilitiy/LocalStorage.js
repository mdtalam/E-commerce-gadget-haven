import toast from "react-hot-toast";
import Swal from 'sweetalert2';

// get cart product data
const getAllProduct = () =>{
    const products = localStorage.getItem('cart');
    if(products){
        const product = JSON.parse(products)
        return product
    }
    else{
        return []
    }
    
}


// add to product to localStorage
const addProduct = product =>{
    const addCart = getAllProduct()
    const isExist = addCart.find(item => item.product_id == product.product_id)
    if(isExist) return toast.error('Product already Exist',{
        duration: 4000,
        position: 'top-center',
    });
    
    addCart.push(product)
    localStorage.setItem('cart',JSON.stringify(addCart))
    // toast.success('Product successfully added to cart!',{
    //     duration: 4000,
    //     position: 'top-center',
    // });
    Swal.fire({
        title: 'Error!',
        text: 'Product successfully added to cart!',
        icon: 'success',
        confirmButtonText: 'Close'
      })
}


// remove a product from localStorage
const removeProduct = (id)=>{
    const cart= getAllProduct();
    const remained = cart.filter(product => product.product_id != id)
    localStorage.setItem('cart',JSON.stringify(remained))
    toast.success('Product successfully removed from cart!',{
        duration: 4000,
        position: 'top-center',
    })
}


// Wish list function





export { addProduct, getAllProduct, removeProduct };

