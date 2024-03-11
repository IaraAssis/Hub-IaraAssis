import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const RoutesMain = () => {

    return (
        <Routes>
              {/* Rotas que somente usuários DESLOGADOS conseguirão acessar */}
            <Route element={<PublicRoutes />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

              {/* Rotas que somente usuários LOGADOS conseguirão acessar */}
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<HomePage />} />
            </Route>

            {/* Rotas livres para ambas as situações */}
            <Route path="/error" element={<ErrorPage />} />
            
        </Routes>
    )
};

