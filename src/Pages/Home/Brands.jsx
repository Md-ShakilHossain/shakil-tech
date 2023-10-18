import { useEffect, useState } from "react";
import Card from "./Card";

const Brands = () => {

    const [brandsData, setBrandsData] = useState([]);

    useEffect(() => {
        fetch('/homePageData.json')
            .then(res => res.json())
            .then(data => setBrandsData(data))
    }, [])


    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Brands:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    brandsData.map(brand => <Card
                        key={brand.id}
                        brand={brand}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Brands;