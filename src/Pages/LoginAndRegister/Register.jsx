import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [firebaseError, setFirebaseError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        setError('');
        setFirebaseError('');

        if (password.length < 6) {
            setError('Password length should be at least 6');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Password should includes at least one capital letter');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError('Password should includes at least one special character');
            return;
        }


        createUser(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(() => {
                setFirebaseError('Email already in used');
            })


    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-semibold">Register now!</h1>

                </div>
                <div className="card shadow-2xl bg-slate-200">
                    <form onSubmit={handleRegister}
                     className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            <div>
                                <p className="text-red-500 font-semibold">{firebaseError}</p>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <div>
                                <p className="text-red-500 font-semibold">{error}</p>
                            </div>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary mt-4">Register</button>
                        </div>
                    </form>
                </div>
                <p className=" text-xl">Already have an account please <span className="text-red-500"><Link to='/login'>Login</Link></span></p>
            </div>
            
        </div>
    );
};

export default Register;