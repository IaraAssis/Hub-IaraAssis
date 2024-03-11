import { createContext, useContext, useEffect, useState } from "react";
import { closeOnClick } from "../hooks/closeOnClick";
import { Api } from "../../services/api";
import { useUserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({children}) => {
    const [editingTech ,setEditingTech] = useState(null);
    const [deleteTech, setDeleteTech] = useState(false);
    const {techReading, setTechReading} = useUserContext();


    const createTech = async (formData, setLoading) =>{
        try {
            setLoading(true); 
            const token = localStorage.getItem("@TOKEN");

            const {data} = await Api.post("users/techs", formData, {
                headers: {
                Authorization: `Bearer ${token}`,
                }
            });
            
            setTechReading([...techReading, data]);
            
            toast.success("Tecnologia criada com sucesso!!");
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false); 
        }    
    };

    const deleteTechId = async (deleteId) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            await Api.delete(`users/techs/${deleteId}`, {
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })

            const newTech = techReading.filter(tech => tech.id !== deleteId);
            setTechReading(newTech);

            toast.success("Tecnologia excluida com sucesso!!")

            
        } catch (error) {
            console.log(error);
            
        }
    };

    const editTech = async (formData, setLoading) => {
        try {
            setLoading(true);
            const token = localStorage.getItem("@TOKEN");
            const {data} = await Api.put(`users/techs/${editingTech.id}`, formData,{
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })
            toast.success("Tecnologia editada com sucesso!!")
            const newTech = techReading.map(tech => {
                if(tech.id === editingTech.id){
                    return data;
                }else{
                    return tech;
                }
            })
            setTechReading(newTech);
        } catch (error) {
            console.log(error);

        } finally {
        setLoading(false);
        };
    };

    return(
        <TechContext.Provider value={{  techReading, createTech, setEditingTech,editingTech, setDeleteTech, deleteTechId, editTech  }}>
            {children}
        </TechContext.Provider>
    )
    
};

export const useTechContext = () => {
    return(
        useContext(TechContext)
    )
};