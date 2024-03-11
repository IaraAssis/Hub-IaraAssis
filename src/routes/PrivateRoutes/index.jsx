import { useContext } from "react";
import { useUserContext } from "../../components/providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import { TechProvider } from "../../components/providers/TechContext";


// Outlet - semelhante ao children, existe para renderizar uma rota filho
// Navigate - componente que redireciona ao ser renderizado
export const PrivateRoutes = () =>{
    const {user} = useUserContext();

    return user? <TechProvider><Outlet/></TechProvider>  : <Navigate to="/login"/>
};
