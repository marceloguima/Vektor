import { useState } from 'react'
import  Header  from './components/header/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
    </div>
    
  )
}

export default App
