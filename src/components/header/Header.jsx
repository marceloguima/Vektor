import Hero from "../hero/Hero"
import NavBar from "../navBar/NavBar"
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <Hero/>
    </div>
  )
}

export default Header
