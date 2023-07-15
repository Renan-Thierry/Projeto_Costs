import styles from './Sobre.module.css'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Sobre() {
  return (
    <div className={styles.sobre_info}>
      <h1>Sobre o Projeto</h1>
      <p>Projeto FullStack CRUD (Create, Read, Update e Delete) desenvolvido por Renan Thierry Andrade de Oliveira durante o curso de React da Instituição Hora de Codar do programador Matheus Battisti.</p>
      <p>Este projeto foi desenvolvido utilizando HTML com JSX, Style Component com CSS, API e requisições como FastAPI e por fim mas não menos importante a parte de JavaScript com React, abrangendo React Router, Hook, UseState, UseEffect, Useparams, UUID, entre outros</p>
      <p>Você pode conferir outros projetos que desenvolvi através do meu GitHub clicando no ícone abaixo, ou entrar em contato comigo através dos outros links.
      </p>
      <ul className={styles.social_list}>
        <li>
        <FaGithub />
        </li>
      <li>
        <FaInstagram />
      </li>
      <li>
        <FaLinkedin />
      </li>
    </ul>
    </div>
  )
}

export default Sobre