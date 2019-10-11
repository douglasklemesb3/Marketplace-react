import React, {useState} from 'react'
import "./Item.scss";
import Button from '../Button/Button';


const Item = ({titulo, imagem, descricao, preco}) => {
    const [count,setCount] = useState(0)

    const adicionar = () =>{
        if( count >= 0 && count < 10){
            setCount( count + 1)
        }
    }

    const remover = () =>{
        if(count !== 0 ){
            setCount(count - 1)
        }
    }
    return (
        <div className="Item">
            <h2>{titulo}</h2>
            <img src={imagem} alt="item"/>
            <p>{descricao}</p>
            <p>R${preco}</p>
            <p>{count}</p>
            <div>
            <Button funcao={remover}>-</Button>
            <Button funcao={adicionar}>+</Button>

            </div>
            <Button>Adicionar ao carrinho</Button>

        </div>
    )
}


export default Item; 