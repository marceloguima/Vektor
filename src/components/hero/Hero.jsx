import "./Hero.css";
import Botao from "../botao/Botao";

const Hero = () => {
    return (
        <div className="hero">
            <div className="carolsel">
                <div className="title">
                    <h1>Lorem, ipsum dolor.</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img
                    src="./images/model-camis-azul.png"
                    alt="modelo com camiseta polo azul"
                />
            </div>

            <div className="cartao-produto">
                <div className="text-descr">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatibus.
                    </p>
                    <Botao text="Ver mais" />
                </div>
                <img
                    src="./images/sapato-preto3.png"
                    alt="imagem de um sapato social"
                />
            </div>
            <div className="cartao-fidelidade">
                <div className="text-descr">
                    <h2>Cartão fidelidade</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatibus.
                    </p>
                <Botao text="Conheça as vantagens" />
                </div>
                <img
                    src="./images/segurando-cartao1.png"
                    alt="imagem de um cartão fidelidade"
                />
            </div>
        </div>
    );
};

export default Hero;
