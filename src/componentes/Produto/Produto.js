import React from 'react';
import "./Produto.scss";
import Item from "./Item";
import Rey from "../../imagem/1.jpg";
import Solo from "../../imagem/2.jpg"
import Button from '../Button/Button';

const Produto = () => {
    // const [produto1, setProduto1 ] = useState({})
    // const batata = () => {
    //     setProdutos({nome: "x", price: "100", qnt: 12})
    // }
    return (
        <div className="Produto">
        <Item titulo="Rey" imagem={Rey} descricao="Boneco star wars ep VII" preco="300,00"/>
        <Item titulo="Han Solo" imagem={Solo} descricao="Boneco star wars ep IV" preco="200,00"/>
        <Item titulo="Rey" imagem={Rey} descricao="Boneco star wars ep VII" preco="300,00"/>
        <Item titulo="Rey" imagem={Rey} descricao="Boneco star wars ep VII" preco="300,00"/>
        <Item titulo="Rey" imagem={Rey} descricao="Boneco star wars ep VII" preco="300,00"/>
        <Item titulo="Rey" imagem={Rey} descricao="Boneco star wars ep VII" preco="300,00"/>
        <div>
        <Button id="botao">Finalizar Compra</Button>
        </div>

        </div>
    )
}

export default Produto;