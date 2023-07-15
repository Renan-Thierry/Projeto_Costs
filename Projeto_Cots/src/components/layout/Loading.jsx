import styles from './Loading.module.css'
import Loader from '../../img/Loading.svg'

function Loading(){
    return(
        <div className={styles.Loader_container}>
            <img className={styles.Loader} src={Loader} alt='Loading da pagina' />
        </div>
    )
}

export default Loading;