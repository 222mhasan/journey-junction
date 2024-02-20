import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        // getting information from form field
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);

        //user login
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                alert('login successful')
            })
            .catch(error => {
                console.error(error);
                alert(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-20">
                {/* login form from daisyUI start */}
                <div>
                    <form onSubmit={handleLogin} className="md:w-3/4 mx-auto lg:w-1/2">

                        <h1 className="text-2xl font-bold ">Login</h1>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" placeholder="Username or Email" name="email" className=" border-b border-gray-400" required />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="password" placeholder="password" name="password" className=" border-b border-gray-400" required />
                        </div>

                        <div className="flex justify-between mt-4">
                            <div className="items-center flex gap-3">
                                <input type="checkbox" className="checkbox checkbox-warning" required />
                                <span className="label-text">Remember Me</span>
                            </div>
                            <div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[#F9A51A] underline font-semibold">Forgot password?</a>
                                </label>
                            </div>
                        </div>

                        {/* login button */}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F9A51A]">Login</button>
                        </div>

                    </form>
                    {/* Re-direct to register Page if user not registered*/}
                    <p className="text-center my-4">Don't have an account? <Link className="underline font-semibold text-[#F9A51A] " to='/register'>Create an Account</Link></p>
                </div>
                {/*  login form end */}

                {/* Or login with */}
                <div>
                    <p className="text-center">Or</p>
                    <div className="mx-auto w-fit text-center items-center ">
                        <button className="hover:bg-[#F9A51A]  flex items-center gap-5 border-2 border-gray-400 font-semibold  rounded-full p-2 mb-3" ><FaFacebook className="text-2xl" />Continue with Facebook</button>
                        <button className="hover:bg-[#F9A51A]  flex items-center gap-5 border-2 border-gray-400 font-semibold  rounded-full p-2" ><FaGoogle className="text-2xl" />Continue with Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;