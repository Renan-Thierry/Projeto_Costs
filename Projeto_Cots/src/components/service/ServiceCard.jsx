import styles from '../project/ProjetoCard.module.css';
import {BsFillTrashFill} from 'react-icons/bs';

function ServiceCard({id, name, costs, description, handleRemoveService}){

const remove = (e)=> {
    e.preventDefault()
    handleRemoveService(id, costs)
}

    return(
        <div className={styles.projeto_Card}>
            <h4>{name}</h4>
            <span>Gasto total:</span> R${costs}
            <p>{description}</p>
            <div className={styles.projeto_Card_actions}>
                <button onClick={remove}>
                <BsFillTrashFill />
                Excluir</button>
                     
            </div>
        </div>
    )
}

export default ServiceCard;