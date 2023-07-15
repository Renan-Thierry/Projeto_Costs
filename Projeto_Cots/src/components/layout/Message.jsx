import styles from './Message.module.css'
import {useState, useEffect} from 'react'

function Message({type, msg}){

    const [visibilidade, setVisibilidade] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisibilidade(false)
            return
        }
    setVisibilidade(true)

    const timer = setTimeout(() => {
        setVisibilidade(false)
    }, 3000);
    
    return () => clearTimeout(timer)
    },[msg])

    return(
        <>
        {visibilidade &&(
            <div className={`${styles.message} ${styles[type]}`}> 
                <p>{msg}</p>            {/*condiciona como a Mensagem vai ser exibida*/}
            </div>     
        )}
        </>
    )
}


export default Message;