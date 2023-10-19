import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";


const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const provider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        setError('');

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1000);


            })
            .catch(() => {
                setError('Invalid Email or Password')
            })
    }

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
        }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shadow-2xl bg-slate-200">
                    <form onSubmit={handleLogin}
                    className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div>
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <div>
                    <h3 className="mt-5 text-2xl text-center font-semibold">OR</h3>
                    <button onClick={handleLoginWithGoogle}
                     className="bg-slate-300 mt-4 py-2 px-6 text-xl font-semibold rounded-lg shadow-xl">Login with Google</button>
                </div>
                <p className="mt-4 text-xl">New Here ? Please <span className="text-red-500"><Link to='/register'>Register</Link></span></p>
            </div>
        </div>
    );
};

export default Login;