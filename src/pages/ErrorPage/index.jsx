import styles from "./style.module.scss";

export const ErrorPage = () =>{
    return(
        <div className={styles.error}>
            <h1 className="headerTitle">Error:<strong> 404!</strong></h1>
            <img src="https://gifs.eco.br/wp-content/uploads/2022/04/gifs-de-cachorros-engracados-31.gif" alt="erro" />
            <p className="headerTitle span">Nao foi possivel encontrar a pagina!</p>
        </div>
    )
};