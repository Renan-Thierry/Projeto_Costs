import styles from '../project/FormProjetos.module.css';
import { useState } from 'react';
import SubmitButton from '../form/SubmitButton';
import Input from '../form/Input';

function ServiceForm({handleSubmit, textBtn, projectData}) {
    const [service, setService] = useState({})
    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do Serviço" name="name" placeholder="Insira o nome do Serviço" handleOnChange={handleChange}/>
            <Input type="number" text="valor do Serviço" name="costs" placeholder="Insira o valor do Serviço" handleOnChange={handleChange}/>
            <Input type="text" text="descriçao do Serviço" name="description" placeholder="Descreva o Serviço" handleOnChange={handleChange}/>
            <SubmitButton text={textBtn}/>
        </form>
    )
}

export default ServiceForm;