import { useForm } from "react-hook-form";
import { useTechContext } from "../../providers/TechContext";
import { Input } from "../Input";
import styles from "./style.module.scss"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerTech } from "./registerTech";

export const FormTech = () => {
    const {register, handleSubmit, formState: {errors},} = useForm({
        resolver: zodResolver(registerTech)
    });
    const {createTech} = useTechContext();
    const [loading, setLoading] = useState(false);


    const submit = (formData) =>{
        createTech(formData, setLoading);
        
    };
    return(
        <form onSubmit={handleSubmit(submit)}>
            <span className={styles.form}>
                <label className="headline label"> Nome </label>
                <Input type="text" 
                {...register("title")}
                placeholder="Digite a tecnologia..."
                disabled={loading}
                error={errors.title}
                />
                
                <label className="headline label">Selecionar status</label>
                <select className="headline inputs" {...register("status")} required>
                    <option className="headline inputs" value="Iniciante">Iniciante</option>
                    <option className="headline inputs" value="Intermediário">Intermediário</option>
                    <option className="headline inputs" value="Avançado">Avançado</option>
                </select>
                <button className="btnBig user" type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
                </button>
            </span>
        </form>
    );
};