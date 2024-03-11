import { useState } from "react";
import { EditTechModal } from "../../CreateTechModal/EditTechModal";
import { useTechContext } from "../../providers/TechContext";
import styles from "./style.module.scss";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";

export const TechCard = ({ tech }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {deleteTechId , setEditingTech} = useTechContext();

    const handleEditClick = () => {
        setEditingTech(tech); 
        setIsModalOpen(true);
    }
    
    return (
        <>
            <li className={styles.lists}>
                <div>
                    <h3 className="headlineBold bg">{tech.title}</h3>
                </div>
                <span>
                    <h4 className="headline inputs">{tech.status}</h4>
                    <button
                        onClick={ handleEditClick}
                        title="Editar"
                        aria-label="edit">
                        <MdOutlineEdit size={25} />
                    </button>
                    <button onClick={() => deleteTechId(tech.id)} 
                        title="Remover"
                        aria-label="remove">
                        <MdOutlineDelete size={25} />
                    </button>
                </span>
            </li>
                {isModalOpen ? <EditTechModal  setIsModalOpen={setIsModalOpen} /> :null }      
        </>         
    );
};
