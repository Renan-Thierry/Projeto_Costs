import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton';
import img_animated from '../../img/imagem_animada.jpg'

function Home() {
  return (
    <section className={styles.content}>
      <h1 className={styles.tittle}>Bem-vindo ao <span>Costs!</span></h1>
      <p className={styles.text}>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="./CriarProjetos" text="Criar Projeto"/>
      <img src={img_animated} alt="imagem_animada"/>
    </section>
  )
}

export default Home;