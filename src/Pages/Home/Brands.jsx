import { useEffect, useState } from "react";

const Brands = () => {

    const [brandsData, setBrandsData] = useState([]);

    useEffect(() => {
        fetch('/homePageData.json')
            .then(res => res.json())
            .then(data => setBrandsData(data))
    }, [])

    console.log(brandsData)

    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-4xl font-bold">Our Brands</h2>
        </div>
    );
};

export default Brands;