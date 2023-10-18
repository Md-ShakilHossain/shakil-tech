import Banner from "./Banner/Banner";
import Brands from "./BrandsCard/Brands";
import Conditions from "./OfferConditions/Conditions";
import Features from "./SpecialFeatures/Features";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Features></Features>
            <Conditions></Conditions>
        </div>
    );
};

export default Home;