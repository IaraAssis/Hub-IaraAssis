import { NavBar } from "../NavBar";

export const DefaultTemplate = ({ children}) => {
    return (
        <>
        <NavBar/>
            {children}
        </>
    );
};
