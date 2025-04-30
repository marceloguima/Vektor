import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  <nav>
    <div className="logo">logo</div>
 
        
          <Link to="/promocoes">Promoções</Link>
          <Link to="/mais-comprados">Mais Comprados</Link>
        
     
  </nav>
  )
}

export default NavBar
