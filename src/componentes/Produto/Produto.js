import React from 'react';
import "./Produto.scss";
import Item from "./Item";
import Rey from "../../imagem/1.jpg";
import Solo from "../../imagem/2.jpg";
import america from "../../imagem/3.jpg";
import obiwan from "../../imagem/4.jpg";
import batman from "../../imagem/5.jpg";
import madruga from "../../imagem/6.jpg";

import Button from '../Button/Button';

const Produto = () => {
    // const [produto1, setProduto1 ] = useState({})
    // const batata = () => {
    //     setProdutos({nome: "x", price: "100", qnt: 12})
    // }
    const incrementar = () => {

    }
    return (
        <div className="Produto">
        <Item titulo="Rey" id="1" imagem={Rey} descricao="Boneco star wars ep VII" preco="300"/>
        <Item titulo="Han Solo" id="2" imagem={Solo} descricao="Boneco star wars ep IV" preco="300"/>
        <Item titulo="Capitão America" id="3" imagem={america} descricao="Boneco Marvel comics" preco="600"/>
        <Item titulo="Obi-wan" id="4" imagem={obiwan} descricao="Boneco star wars ep III" preco="300"/>
        <Item titulo="Batman" id="5" imagem={batman} descricao="Boneco DC comics" preco="150"/>
        <Item titulo="Seu Madruga" id="6" imagem={madruga} descricao="Boneco turma do Chaves" preco="1300"/>
        <div>
        <Button id="botao">Finalizar Compra</Button>
        </div>
        </div>
    )
}

export default Produto;