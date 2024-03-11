import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "../InputPassword";
import { registerLogin } from "./registerLogin";
import styles from "../FormLogin/style.module.scss";
import { useUserContext } from "../../providers/UserContext";


export const FormLogin = () => { 
    const {userLogin} = useUserContext();

    const [loading, setLoading] = useState(false);

    const { 
        register, 
        handleSubmit, 
        reset,
        formState: {errors}, } = useForm({
            resolver: zodResolver(registerLogin)
    });
    
    const submit = (formData) => {
        userLogin(formData, setLoading, reset);
        
    };

    return (
        <form className="container" onSubmit={handleSubmit(submit)}>
            <div className={styles.inputBox}>
                <h1 className="title">Login</h1>
                <Input 
                    label="Email"
                    placeholder="Seu email"
                    type="email"
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
                <div className={styles.buttons}>
                    <button className="btnBig user" type="submit" disabled={loading}>
                        {loading ? "Entrando..." : "Entrar"}
                    </button>
                    <p className="headlineBold sm">Ainda não possui uma conta?</p>
                    <Link  className="btnBig gray" to="/register">Cadastrar</Link> 
                </div>
            </div>
        </form>
    );
};



