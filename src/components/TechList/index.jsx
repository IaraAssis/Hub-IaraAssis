import { CreateTechModal } from "../CreateTechModal";
import { useTechContext } from "../providers/TechContext";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { useContext, useState } from "react";

export const TechList = () => {
    const {techReading } = useTechContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
        
    return (
        <>
            <section className={styles.TechList}>
                <div>
                    <h2 className="headlineBold bg">Tecnologias</h2>
                    <button className="btnSm" onClick={() => setIsModalOpen(true)}>+</button>
                </div>
            </section>
            <ul>
                {techReading.map(tech => (
                    <TechCard key={tech.id} tech={tech}/>
                    ) )}
            </ul>
            {isModalOpen ? <CreateTechModal setIsModalOpen={setIsModalOpen} /> : null}
        </>
    );
};





