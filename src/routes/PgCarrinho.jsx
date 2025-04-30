import "./PgCarrinho.css";
const PgCarrinho = () => {
  return (
    <div className="carrinho-page">
        <h1>Carrinho</h1>
        <p>Confira os produtos que você adicionou ao carrinho!</p>
        <div className="carrinho-container">
            <div className="carrinho-item">
            <img src="https://via.placeholder.com/150" alt="Produto 1" />
            <h3>Produto 1</h3>
            <p>R$ 99,90</p>
            </div>
            <div className="carrinho-item">
            <img src="https://via.placeholder.com/150" alt="Produto 2" />
            <h3>Produto 2</h3>
            <p>R$ 49,90</p>
            </div>
        </div>
      
    </div>
  )
}

export default PgCarrinho
