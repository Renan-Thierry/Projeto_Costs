import styles from './CriarProjetos.module.css'
import FormProjetos from '../project/FormProjetos';
import { useNavigate } from 'react-router-dom'     //permite redirecionar o usuario

function CriarProjetos() {
  const navigate = useNavigate()

  function createPost(projetos){
    //inicializa costs e serviços - avisa quando tem projetos
    projetos.cost = 0
    projetos.services = []

    fetch('http://localhost:3000/projetos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projetos),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate('/projetos', { state: {message: 'Projeto criado com sucesso!'} }) // vai redirecionar o usuario quando criar o projeto
    })
      .catch((err) => console.log(err))
    }

  return(
    <section className={styles.content_section}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar nossos serviços</p>
      <FormProjetos handleSubmit={createPost}   btnText="Criar Projeto"/>
    </section>
  )
}
export default CriarProjetos;