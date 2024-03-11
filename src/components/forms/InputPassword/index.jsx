import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
    <div className={styles.inputBox}>
        <label className="headline label">{label}</label>
        <div className={styles.inputGrid}>
        <input className="headline inputLogin " type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
            </button>
        </div>
        {error ? <p className="error">{error.message}</p> : null}
    </div>
    );
});
