import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const firstName = form.get('firstName');
        const lastName = form.get('lastName');
        const email = form.get('email');
        const password = form.get('password');

        console.log(firstName, lastName, email, password);


        //create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })

    }


    return (
        <div>
            <h2 className="text-3xl font-semibold text-center my-4">Register Here</h2>

            {/* register page  */}
            <div>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">

                    {/* first name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" required />
                    </div>

                    {/* last name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" required />
                    </div>

                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username or Email</span>
                        </label>
                        <input type="email" placeholder="Username or Email" name="email" className="input input-bordered" required />
                    </div>

                    {/* password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>

                    {/* confirm password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* register button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                {/* Re-direct to login Page if user is registered*/}
                <p className="text-center my-4">Already have an account? <Link className="underline font-semibold text-blue-600" to='/login'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default Register;