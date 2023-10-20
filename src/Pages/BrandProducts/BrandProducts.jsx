import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const BrandProducts = () => {

    const loadedProducts = useLoaderData();
    const slicedArray = loadedProducts.slice(0, 3);
    const [sliderData, setSliderData] = useState(slicedArray[0]);
    const [id, setId] = useState(null);

    const handleClick = (_id, i) => {
        console.log(i);
        const slider = slicedArray[i];
        console.log(slider)
        setSliderData(slider)
        setId(_id);
    }

    return (
        <div className="w-4/5 mx-auto mt-12">
            {
                slicedArray.length > 0 ?
                    <div className="">
                        <div className="flex items-center bg-slate-200 shadow-xl p-6">
                            <img className="w-1/2 h-72" src={sliderData.imageURL} alt="" />
                            <div>
                                <h3 className="text-xl text-center md:text-4xl font-bold">Explore Our Latest Products</h3>
                                <p className="font-semibold mt-4 lg:w-1/2 lg:mx-auto">We are offering you in your flexible way. Just fill up our conditions and take the bumper offer.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-center mb-12 mt-8">
                            {
                                slicedArray.map((image, i) => <div key={image._id} className="">
                                    <img
                                        src={image.imageURL}
                                        className={`${image._id === id ? "border-2 border-black" : ""} w-14 h-10`}
                                        onClick={() => handleClick(image._id, i)}

                                    >
                                    </img>

                                </div>
                                    // <Slider
                                    // key={image._id}
                                    // image={image}
                                    // ></Slider>
                                )
                            }
                        </div>
                    </div> : ''
            }
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