import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div>
            AuthLAyout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;