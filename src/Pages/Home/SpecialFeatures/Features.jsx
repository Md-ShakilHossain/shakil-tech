

const Features = () => {
    return (
        <div className="w-4/5 mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Special Features:</h2>
            <div>
                <div className="flex justify-center">
                    <img className="w-72 drop-shadow-xl mb-12" src="https://i.ibb.co/xYy9spX/emoji.webp" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className=" bg-slate-200 p-12 rounded-t-2xl">
                        <h2 className="text-3xl font-bold"> Replacement</h2>
                        <p className="mt-4 font-semibold">We are offering 7 days replacement at any product of our brand shop. Only Shakil_Tech can give you such kinds of offer in your reasonable area. No more worry about sustainability. </p>
                    </div>
                    <div className=" bg-slate-200 p-12 rounded-t-2xl">
                        <h2 className="text-3xl font-bold">Free Servicing</h2>
                        <p className="mt-4 font-semibold">We are offering 2 years free servicing at any product of our brand shop. Only Shakil_Tech can give you such kinds of offer in your reasonable area. No more worry about sustainability. </p>
                    </div>
                    <div className=" bg-slate-200 p-12 rounded-t-2xl">
                        <h2 className="text-3xl font-bold">Cheapest Rate</h2>
                        <p className="mt-4 font-semibold">No more worry about your budget. We are very budget friendly. We offer you with the cheapest price. We also make home delivery without any service charge. So visit my shop and take our services.</p>
                    </div>
                </div>
                <h5 className="text-xl mt-4 text-green-600 font-medium"><span className="text-red-600 text-2xl font-bold">Note:</span> You will also get warranty and guaranty according to brand. Above offer only for our brand shop.</h5>
            </div>
        </div>
    );
};

export default Features;