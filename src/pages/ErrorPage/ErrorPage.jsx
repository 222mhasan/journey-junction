import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-10">404, not found</h2>
            <Link  to='/'><button className="btn w-full mx-auto text-lg">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;