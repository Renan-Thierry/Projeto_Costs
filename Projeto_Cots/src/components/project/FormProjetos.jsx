import styles from './FormProjetos.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useState, useEffect } from 'react'

function FormProjetos({btnText, handleSubmit, projectData}) {
  const [categoria, setCategoria] = useState([])
  const [projeto, setProjeto] = useState(projectData || {})  //vai iniciar com os dados do projeto ou com um objeto vazio

  useEffect(() => {
    fetch('http://localhost:3000/categorias', {method: 'GET',
  headers: {
  'Content-Type': 'application/json',
  },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCategoria(data);
  })
    .catch((err) => console.log(err)
  )}, [])

  const submit = (event) => {
    event.preventDefault() //faz com q a pagina nao atualize apos o envio dos dados
    handleSubmit(projeto)
  }
  function handleChange(e) {
    setProjeto({...projeto, [e.target.name]: e.target.value}) //metodo dinamico de alterar o valor de um objeto
  }
  function handleCategory(e) {
    setProjeto({...projeto, categoria: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    }})
  } 

  return (
    <form onSubmit={submit} className={styles.content_form}> 
      <Input type="text" placeholder="Insira o nome do projeto" text="Nome do Projeto" name="name" handleOnChange={handleChange} value={projeto.name ? projeto.name : ''}/>
      <Input type="number" placeholder="Insira o orçamento total ($)" text="Orçamento do Projeto" name="budget" handleOnChange={handleChange} value={projeto.budget ? projeto.budget : ''}/>
      <Select text="Selecione a Categoria" name="category_id" options={categoria} handleOnChange={handleCategory} value={projeto.categoria ? projeto.categoria.id : ''}/>
      <SubmitButton text={btnText}/>
      </form>
  )
}

export default FormProjetos;
