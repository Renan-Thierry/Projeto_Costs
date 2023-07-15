import {useLocation} from "react-router-dom"
import Message from "../layout/Message";
import styles from "./Projetos.module.css"
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjetoCard from "../project/ProjetoCard"; 
import { useState, useEffect } from "react";
import Loading from '../layout/Loading'

function Projetos() {
  const [projetos, setProjetos] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [removeMessage, setRemoveMessage] = useState('')
  
  const location = useLocation()  //e usado para pegar a mensagem da pagina de criar projeto dinamicamente
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {

      fetch('http://localhost:3000/projetos', 
    {method: 'GET',
     headers: { 'content-type': 'application/json'},
   })
    .then(resp => resp.json())
    .then((data) => {
      setProjetos(data)
      setRemoveLoading(true)
    })
    .catch(erro => console.log(erro))
      }, 3000)
  },[])

  function removeProjeto(id) {
    fetch(`http://localhost:3000/projetos/${id}`,
    {method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  }).then((resp) => resp.json())
  .then((data) => {
  setProjetos(projetos.filter((projetos) => projetos.id !== id))  /*filtra o projeto e exclue do front, sendo q ja foi removido do back entao n precisa fazer outra requisição*/
  setRemoveMessage('Projeto removido com sucesso')
  })  
  .catch((erro) => console.log(erro))
  }

  return (
    <div className={styles.project_content}>
      <div className={styles.title_content}>
        <h1>Pagina de Projetos</h1>
        <LinkButton to="../CriarProjetos" text="Criar Projeto"/>
      </div>
      {message && <Message type="sucesso" msg={message}/>}
      {removeMessage && <Message type="sucesso" msg={removeMessage}/>}
      <Container custoClass="start">
      {projetos.length > 0 && 
        projetos.map((projetos) => (
        <ProjetoCard name={projetos.name} id={projetos.id} categoria={projetos.categoria?projetos.categoria.name:'Categoria Indefinida'} budget={projetos.budget} key={projetos.id} handleRemove={removeProjeto}/>
        ))}
      </Container>
      {!removeLoading && <Loading />}   {/*Aki o valor de removeLoading esta em False entao o componente loading vai ser exibido*/}
      {removeLoading && projetos.length === 0 && ( 
        <p>Não há Projetos cadastrados</p> 
        )  
      } {/*Aki o valor de removeLoading esta em true e nao tem projetos entao o paragrafo e disparado */}
      </div>
  )
}
export default Projetos;