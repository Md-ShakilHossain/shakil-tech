

const Banner = () => {
    return (
        <div className="w-4/5 mx-auto my-12">
            <div className="flex flex-col md:flex-row justify-between items-center bg-slate-200 shadow-lg drop-shadow-lg rounded-tl-3xl rounded-br-3xl">
                <img src="https://i.ibb.co/M9gbN3L/banner-pic.png" alt="" className="lg:w-[600px] md:w-80" />
                <div className="p-5">
                    <p className="text-2xl lg:text-5xl font-bold text-green-600 mt-4">Offer! Offer! Offer!</p>
                    <p className="md:text-2xl font-bold mt-4"><span className="text-6xl text-red-500">40%</span> Discount at any Product</p>
                    <p className="lg:text-xl lg:font-semibold mt-5">We are offering you 40% discount at any product with some easy conditions for upcoming winter. To see the conditions you must explore.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;