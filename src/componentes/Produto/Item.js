import React from 'react'
import "./Item.scss";
import Button from '../Button/Button';
import Rey from "../../imagem/1.jpg";

const Item = ({titulo, imagem, descricao}) => {
    return (
        <div className="Item">
            <h2>Rey</h2>
            <img src={Rey} alt="item"/>
            <p>{descricao}</p>
            <div>
            <Button>-</Button>
            <Button>+</Button>

            </div>
    

        </div>
    )
}


export default Item; 