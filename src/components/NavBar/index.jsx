import { useLocation, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { useUserContext } from "../providers/UserContext";
import { useContext } from "react";

export const NavBar = () => {

    const {userLogout} = useUserContext();

    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";
    const buttonText = isRegisterPage ? "Voltar" : "Sair";

    return (
        <nav className={`${styles.navBar} ${isHomePage ? styles.spaceBetween : ""}`}>
        <div className={isLoginPage ? styles.centeredTitle : ""}>
            <h1 className="logo">Kenzie Hub</h1>
        </div>
        {!isLoginPage && (
            <button onClick={() => {
                if (isRegisterPage) {
                    navigate("/login");
                } else {
                    userLogout();
                }}}
                className="btnSm">
                    {buttonText}
            </button>
        )}
        </nav>
    );
};
