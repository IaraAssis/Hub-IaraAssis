import { useForm } from "react-hook-form";
import { useTechContext } from "../../providers/TechContext";
import { Input } from "../Input";
import styles from "./style.module.scss";
import { useState } from "react";

export const FormTechEdit = () => {
    const {editingTech, editTech} = useTechContext();
    const [loading, setLoading] = useState(false);

    const {register, handleSubmit} = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status,
        }
    });

    const submit = (formData) =>{
        editTech(formData, setLoading);
        
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <span className={styles.form}>
                <label className="headline label"> Nome </label>
                <Input type="text" 
                {...register("title")}
                disabled={loading}
                />
                
                
                <label className="headline label">Selecionar status</label>
                <select className="headline inputs" {...register("status")} required>
                    <option className="headline inputs" value="Iniciante">Iniciante</option>
                    <option className="headline inputs" value="Intermediário">Intermediário</option>
                    <option className="headline inputs" value="Avançado">Avançado</option>
                </select>
                <button  className="btnBig register" type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Salvar alterações"}
                    
                </button>
            </span>
        </form>
    );
};