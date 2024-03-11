import { Loading } from "../Loading";
import { useUserContext } from "../providers/UserContext";
import styles from "./style.module.scss";
import { useContext } from "react";


export const Header = () => {
    const {user} = useUserContext();

    return (
        <header className={styles.header}>
            <div className={styles.user}>
                <h1 className="headerTitle">{user?.name}</h1>
                <p className="headerTitle p">{user?.course_module}</p>
            </div>
        </header>
    );
};




