import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";


const MyCart = () => {

    const loadedCarts = useLoaderData();
    const {user} = useContext(AuthContext);

    const email = user.email;

    const carts = loadedCarts.filter(cart => cart.userEmail === email );

    console.log(carts);
    
    
    return (
        <div className="w-4/5 mx-auto mb-20">
            <h2 className="text-3xl my-12 font-bold text-center">Carts You Have Added</h2>
            {
                carts.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        carts.map(cart => <Cart
                        key={cart._id}
                        cart={cart}
                        ></Cart>)
                    }
                </div> :
                <div>
                    <h4 className="text-red-500 text-4xl font-bold text-center">You have not added any cart yet. Please add first.</h4>
                </div>
            }
        </div>
    );
};

export default MyCart;