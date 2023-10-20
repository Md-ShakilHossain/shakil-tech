import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product = useLoaderData();

    const { imageURL, name, brandName, shortDescription, rating, price } = product;

    return (
        <div className="w-4/5 mx-auto my-20 bg-slate-200 p-6">
            <div className="flex items-center gap-6">
                <div className="w-1/3 text-center">
                    <img src={imageURL} alt="" />
                    <h3 className="text-2xl mt-4 font-bold">{name}</h3>
                    <p className="text-xl mt-3 font-semibold">Price:{price} BDT</p>
                    <p className="font-medium mt-2">Brand: {brandName}</p>
                    <p className="font-medium mt-2">Rating: {rating}</p>
                    
                </div>
                <div className="w-2/3 p-6">
                    <h4 className="text-center text-3xl font-bold mb-4">Details</h4>

                    <p className="font-medium">{shortDescription}</p>

                    <button className="btn w-full mt-10 shadow-xl">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;