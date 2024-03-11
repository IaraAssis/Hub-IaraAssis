import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
        
    const [loading, setLoading] = useState(false);  
    const [user, setUser] = useState(null);
    const [techReading, setTechReading] = useState([]);


    const navigate = useNavigate();

    const pathname = window.location.pathname;  


        useEffect(() => {   
            const token = localStorage.getItem("@TOKEN");
            
            const loadUser = async () => {
            if (token) { 
                try {
                    setLoading(true); 

                    const { data } = await Api.get("profile", { 
                    headers: {
                    Authorization: `Bearer ${token}`,
                    },
                });
                    setUser(data);
                    setTechReading(data.techs);
                    navigate(pathname); 
                } catch (error) {
                    console.log(error);
            
                }finally{
                    setLoading(false); 
                }    
            }
            
        };
            loadUser();
        }, []);
        

    const userLogin = async (formData,setLoading, reset ) => {
        try {
            setLoading(true);
            const { data } = await Api.post("sessions", formData);
            setUser(data.user);
            setTechReading(data.user.techs);
            localStorage.setItem("@TOKEN", data.token);
            reset();
            toast.success("Logado com sucesso");
            navigate("/");

        } catch (error) {
            console.log(error);

        if (error.response.data.message === "Incorrect email / password combination") 
            {toast.error("O e-mail e a senha não correspondem.");
            navigate("/error");
        }
        } finally {
            setLoading(false);
        }
    };

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        
        setUser(null);
        toast.warning("Deslogando...");
        navigate("/login");
    };

    const userRegister = async (formData) => {
        try {
            setLoading(true);
            await Api.post("users", formData);

            toast.success("Conta criada com sucesso!");
            navigate("/login");
        } catch (error) {
            console.log(error);
        if (error.response.data.message === "Email already exists") {
            toast.error("Ops! Algo deu errado");
            navigate("/error");
        }
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserContext.Provider value={{loading, setUser, user, userLogin, userLogout,  userRegister,setTechReading, techReading}}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => {
    return(
        useContext(UserContext)
    )
};


