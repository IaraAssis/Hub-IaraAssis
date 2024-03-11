import styles from "./style.module.scss";
import { closeOnClick } from "../../hooks/closeOnClick";
import { FormTechEdit } from "../../forms/FormTechEdit";


export const EditTechModal = ({setIsModalOpen}) => {

    const modalRef = closeOnClick(() =>{
        setIsModalOpen(false);
    });

    return(
        <>
            <div className={styles.modalOverlay} role="dialog">
                <div ref={modalRef} className={styles.modalBox}>
                    <div>
                        <h2 className="headerTitle span">Tecnologia Detalhes</h2>
                        <button onClick={() => setIsModalOpen(false)}>x</button>
                    </div>
                    <FormTechEdit/>
                </div>
            </div>
        </>
    );
};
