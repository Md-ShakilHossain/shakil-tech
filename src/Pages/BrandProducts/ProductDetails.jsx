import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const ProductDetails = () => {

    const product = useLoaderData();
    const user = useContext(AuthContext);

    const userEmail = user.user.email;

    const { imageURL, name, brandName, shortDescription, rating, price } = product;

    const cartData = { imageURL, name, brandName, shortDescription, rating, price, userEmail};

    const handleAddToCart = () => {

        fetch('https://shakil-tech-server.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(cartData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Cart Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
            console.log(data);
        })

    }

    return (
        <div className="w-4/5 mx-auto my-20 bg-slate-200 p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-fu md:w-1/3 text-center">
                    <img src={imageURL} alt="" />
                    <h3 className="text-xl md:text-2xl mt-4 font-bold">{name}</h3>
                    <p className="text-xl mt-3 font-semibold">Price:{price} BDT</p>
                    <p className="font-medium mt-2">Brand: {brandName}</p>
                    <p className="font-medium mt-2">Rating: {rating}</p>
                    
                </div>
                <div className="w-full md:w-2/3 p-6">
                    <h4 className="text-center text-xl md:text-3xl font-bold mb-4">Details</h4>

                    <p className="text-sm md:text-lg md:font-medium">{shortDescription}</p>

                    <button onClick={handleAddToCart}
                    className="btn w-full mt-10 shadow-xl">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;