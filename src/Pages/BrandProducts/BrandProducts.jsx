import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProducts = () => {

    const loadedProducts = useLoaderData();


    return (
        <div className="w-4/5 mx-auto mt-12">
            {
                loadedProducts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {
                        loadedProducts.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div> :
                    <div>
                        <div className="flex justify-center">
                            <img className="w-72" src="https://i.ibb.co/4Tzw79Q/sad.png" alt="" />
                        </div>
                        <h3 className="text-4xl mb-20
                         text-red-500 font-bold mt-8 text-center">No products Available.</h3>
                    </div>
            }
        </div>
    );
};

export default BrandProducts;