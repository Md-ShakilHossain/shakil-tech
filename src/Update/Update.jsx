import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {

    const dataToUpdate = useLoaderData();
    const { _id, imageURL, name, brandName, rating, price, type } = dataToUpdate;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const imageURL = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const type = form.type.value;
        const updatedInformation = { imageURL, name, brandName, rating, price, type }

        console.log(updatedInformation);

        fetch(`https://shakil-tech-server.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })

                    
                }

            })

    }

    return (
        <div className="w-4/5 mx-auto">

            <form onSubmit={handleSubmit}>
                <div className="form-control bg-slate-200 p-12 w-64 md:w-1/2 shadow-xl mx-auto rounded-t-3xl mt-12 mb-20">

                    <h4 className="text-2xl text-red-500 font-bold mb-4">You are Updating: {name}</h4>

                    <p className='text-green-500 text-center font-semibold'>First letter of Brand Name field will be capital letter but rest of letter will be lowercase. Be Careful.</p>

                    {/* Image Url */}
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-bold">Image</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Photo URL"
                                name="image"
                                defaultValue={imageURL}
                                required
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        {/* Name and Brand Name */}
                        <div className="flex flex-col lg:flex-row lg:gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Name"
                                        name="name"
                                        defaultValue={name}
                                        required
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Brand Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Brand Name"
                                        name="brandName"
                                        defaultValue={brandName}
                                        required
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Type and Price */}
                        <div className="flex flex-col lg:flex-row lg:gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Type</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Type"
                                        name="type"
                                        defaultValue={type}
                                        required
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" placeholder="Price"
                                        name="price"
                                        defaultValue={price}
                                        required
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Short description and Rating */}
                        <div className="flex flex-col lg:flex-row lg:gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" placeholder="Rating"
                                        name="rating"
                                        defaultValue={rating}
                                        required
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input className="btn w-full mt-8 shadow-xl" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;