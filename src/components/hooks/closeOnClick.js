import { useEffect, useRef } from "react";

export const closeOnClick = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleOnClick = (event) => {
            if(ref.current && !ref.current.contains(event.target)){
                if(callback){
                    callback();
                }
            }
        };
        document.addEventListener("mousedown", handleOnClick);

        return() => {
            document.removeEventListener("mousedown", handleOnClick);
        };
    }, [])
    return ref;
};