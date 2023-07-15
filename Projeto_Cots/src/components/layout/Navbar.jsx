import { Link } from 'react-router-dom';
import Container from './Container'
import logo from '../../img/coin.png'
import styles from './Navbar.module.css'


function Navbar () {
  return (
    <>
    <nav className={styles.navbar}>
      <Container>
      <Link to="/">
        <img src={logo} alt="Logo do site" />
      </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>       
            <Link to="/Contatos">Contatos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Projetos">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </ul>
      </Container>
  </nav>
  </>
  )
}

export default Navbar;