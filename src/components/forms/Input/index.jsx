import { forwardRef } from "react";


export const Input = forwardRef(({ error, label, ...rest}, ref) =>{
    
    return(
        <>
            <label className="headline label">{label}</label>
            <input 
                className="headline inputLogin"
                ref={ref} {...rest}
            />
            {error ? <p className="error">{error.mensage}</p> : null}
        </>
    );
});
