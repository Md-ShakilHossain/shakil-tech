import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ brand }) => {
    const { photo, brandName } = brand;
    return (
        <div>
            <Link to={`/products/${brandName}`}>
                <div className='bg-slate-200 pb-4 shadow-xl rounded-br-3xl'>
                    <img className='h-80 w-full rounded-md' src={photo} alt="" />
                    <div>
                        <p className='text-center text-3xl font-bold mt-2'>{brandName}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    brand: PropTypes.object.isRequired
}

export default Card;