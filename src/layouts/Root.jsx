import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto border-2 border-rose-600">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;