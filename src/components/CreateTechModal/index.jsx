import styles from "./style.module.scss";
import { FormTech } from "../forms/FormTech";
import { closeOnClick } from "../hooks/closeOnClick";


export const CreateTechModal = ({setIsModalOpen}) => {

    const modalRef = closeOnClick(() =>{
        setIsModalOpen(false);
    });

    return (
        <>
            <div className={styles.modalOverlay} role="dialog">
                <div ref={modalRef} className={styles.modalBox}>
                    <div>
                        <h2 className="headerTitle span">Cadastrar Tecnologia</h2>
                        <button onClick={() => setIsModalOpen(false)}>x</button>
                    </div>
                    <FormTech />
                </div>
            </div>
        </>
    );
};

