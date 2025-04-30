import './NavBar.css'
import { Link } from 'react-router-dom'
import Carrinho from '../carrinho/Carrinho.jsx'

const NavBar = () => {
  return (
  <nav>
    <div className="logo">logo</div>
 
        
          <Link to="/promocoes">Promoções</Link>
          <Link to="/em-alta">Em alta</Link>
          <Link to="/calcados">Calçados</Link>
          <Carrinho />
        
     
  </nav>
  )
}

export default NavBar
