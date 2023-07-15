import styles from './Contatos.module.css' 

function Contatos() {
  return (
    <div className={styles.content}>
      <h1>Entre em contanto conosco</h1>
      <form>
        <input type="name" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Contatos;