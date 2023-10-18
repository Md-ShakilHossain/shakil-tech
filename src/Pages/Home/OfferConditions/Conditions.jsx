

const Conditions = () => {
    return (
        <div className="w-4/5 mx-auto mb-28">
            <h2 className="text-3xl md:text-4xl font-bold">Offer Conditions:</h2>
            <div className="flex justify-center">
                <img className="w-72" src="https://i.ibb.co/9txkFQs/emoji1.png" alt="" />
            </div>
            <p className="font-medium text-center mt-6 mb-8">Are you worried? No need to be tense anymore. Our conditions are very simple. Just look through over it.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className=" bg-slate-200 p-12 rounded-t-2xl">
                    <h2 className="text-3xl font-bold"> Be a Member</h2>
                    <p className="mt-4 font-semibold">Just register and be a member to get this bumper offer. Creation a account is very simple. At first you have to go login page then you will get a option a create a account. </p>
                </div>
                <div className=" bg-slate-200 p-12 rounded-t-2xl">
                    <h2 className="text-3xl font-bold">First Purchase</h2>
                    <p className="mt-4 font-semibold">After be a member of our brand shop you have to buy at least three products with full payment. You will get 40% discount from the fourth product. So, start from today, stocks are very limited. </p>
                </div>
                <div className=" bg-slate-200 p-12 rounded-t-2xl">
                    <h2 className="text-3xl font-bold">Pre Order</h2>
                    <p className="mt-4 font-semibold">If you do not want to follow previous condition, do not worry, You can just follow this condition. You have to make full payment first. From payment date you will get product after only thirty days with 40% cashback.</p>
                </div>
            </div>
            <h5 className="text-xl mt-4 text-green-600 font-medium"><span className="text-red-600 text-2xl font-bold">Note:</span> We will continue this offer till 1st December 2023</h5>
        </div>
        
    );
};

export default Conditions;