import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  <nav>
    <div className="logo">logo</div>
 
        
          <Link to="/promocoes">Promoções</Link>
          <Link to="/em-alta">Em alta</Link>
          <Link to="/calcados">Calçados</Link>
        
     
  </nav>
  )
}

export default NavBar
