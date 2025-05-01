import "./Hero.css"


const Hero = () => {
  return (
    <div className="hero">
      <div className="carolsel">
        <div className="title">
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <img src="./images/model-camis-azul.png" alt="modelo com camiseta polo azul" />
      </div>

      <div className="desc">
        <div className="text-descr">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        <button>Ver mais</button>
        </div>
        <img src="./images/sapato-preto3.png" alt="" />
      </div>
      <div className="cartao-fidelidade">
        <h2>Cartão fidelidade</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        <button>Ver mais</button>
      </div>

    </div>
  )
}

export default Hero
