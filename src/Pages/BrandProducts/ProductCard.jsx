import PropTypes from 'prop-types';

const ProductCard = ({product}) => {
    const { imageURL, name, brandName, shortDescription, rating, price, type } = product;
    return (
        <div>
            <div className='bg-slate-200 p-4 shadow-xl rounded-br-3xl'>
                    <img className='h-80 w-full rounded-md' src={imageURL} alt="" />
                    <div className='mt-4'>
                        <p className='text-xl font-bold'>{name}</p>
                
                        <p><span className='font-semibold mt-2'>Brand Name: </span> {brandName}</p>

                        <p><span className='font-semibold mt-2'>Type: </span> {type}</p>

                        <p><span className='font-semibold mt-2'>Price: </span> {price} BDT</p>

                        <p><span className='font-semibold mt-2'>Rating: </span> {rating}</p>

                        <button className='btn w-full mt-4 shadow-xl'>Details</button>

                        <button className='btn w-full mt-4 shadow-xl'>Update</button>
                    </div>
                </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard;