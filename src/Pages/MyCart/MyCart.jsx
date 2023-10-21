import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Cart from "./Cart";
import Swal from 'sweetalert2'


const MyCart = () => {

    const loadedCarts = useLoaderData();
    const { user } = useContext(AuthContext);

    const email = user.email;

    const cartsToShow = loadedCarts.filter(cart => cart.userEmail === email);
    const [carts, setCarts] = useState(cartsToShow);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://shakil-tech-server.vercel.app/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const remainingCarts = carts.filter(cart => cart._id !== id);
                            setCarts(remainingCarts);
                              Swal.fire(
                                'Deleted!',
                                'Your Cart has been deleted.',
                                'success'
                              )
                        
                             
                        }
                    })

            }
        })
    }


    return (
        <div className="w-4/5 mx-auto mb-20">
            <h2 className="text-3xl my-12 font-bold text-center">Carts You Have Added</h2>
            {
                cartsToShow.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            carts.map(cart => <Cart
                                key={cart._id}
                                cart={cart}
                                handleDelete={handleDelete}
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