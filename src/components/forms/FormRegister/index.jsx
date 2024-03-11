import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerForm } from "./registerForm";
import styles from "../FormRegister/style.module.scss";
import { useContext, useState } from "react";
import { useUserContext } from "../../providers/UserContext";


export const FormRegister = () => {
    const { userRegister} = useUserContext();
    const [loading, setLoading] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: {errors}}= useForm({
            resolver: zodResolver(registerForm)
    });
    

    const submit = (formData) => {
        userRegister(formData, setLoading);
        
    };

    return (
        <form className="container" onSubmit={handleSubmit(submit)}>
            <div className={styles.inputRegister} >
                <h1 className="title">Crie sua conta</h1>
                <p className="headline sm">Rapido e grátis, vamos nessa!</p>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                    error={errors.name}
                    disabled={loading}
                />
                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                    error={errors.email}
                    disabled={loading}
                />
                <InputPassword
                    label="Senha"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                    error={errors.password}
                    disabled={loading}
                />
                <InputPassword
                    label="Confirmar Senha"
                    type="password"
                    placeholder="Digite aqui sua senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                    disabled={loading}
                /> 
                <Input
                    label="Bio"
                    type="text"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                    error={errors.bio}
                    disabled={loading}
                />
                <Input
                    label="Contato"
                    type="url"
                    placeholder="Opção de contato"
                    {...register("contact")}
                    error={errors.contact}
                    disabled={loading}
                />

                <label className=" headline label ">Selecione o Módulo</label>
                <select className="headline inputs"{...register("course_module")} required>
                    <option className="headline inputs" value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                    <option className="headline inputs" value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                    <option className="headline inputs"value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                    <option className="headline inputs"value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                </select>
                <button className="btnBig register" type="submit" disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </div>
        </form>
    );
};



