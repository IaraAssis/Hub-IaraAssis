import { useContext } from "react";
import { useUserContext } from "../../components/providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () =>{
    const {user} = useUserContext();

    return !user ? <Outlet/> : <Navigate to="/"/>
};
