import { Link } from "react-router-dom";
import styles from "./ProjetoCard.module.css"
import {BsPencil, BsFillTrashFill} from "react-icons/bs"

function ProjetoCard({id, name, categoria, budget, handleRemove}) {
    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    }
    return(
        <div className={styles.projeto_Card}>
            <h4>{name}</h4>
            <p>
                <span>Orcamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[categoria.toLowerCase()]}`}></span> {categoria}
            </p>
            <div className={styles.projeto_Card_actions}>
                <Link to={`/EditProjeto/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Remover
                </button>
            </div>
        </div>
    )
}

export default ProjetoCard;