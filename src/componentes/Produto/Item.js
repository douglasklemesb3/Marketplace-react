import React, { useState, useEffect } from 'react'
import "./Item.scss";
import Button from '../Button/Button';


const Item = ({id, titulo, imagem, descricao, preco }) => {
    const novoValor = Number(preco)
    const [count, setCount] = useState(0);
    const [valorFInal, setValorFinal] = useState(0)

    const adicionar = () => {
        if (count >= 0 && count < 10) {
            setCount(count + 1)
        }
    }

    const remover = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    useEffect(()=>{
        const valorTotal = (count * novoValor);
        localStorage.setItem(`ValorTotal${id}` , valorTotal)

    }, [adicionar, remover])


    useEffect(()=> {
        const valor1 = Number(localStorage.getItem(`ValorTotal1`))
        const valor2 = Number(localStorage.getItem(`ValorTotal2`)) 
        const valor3 = Number(localStorage.getItem(`ValorTotal3`)) 
        const valor4 = Number(localStorage.getItem(`ValorTotal4`)) 
        const valor5 = Number(localStorage.getItem(`ValorTotal5`)) 
        const valor6 = Number(localStorage.getItem(`ValorTotal6`)) 

        const valorzaofinallegal = (valor1 + valor2 + valor3 + valor4 + valor5 + valor6);
        setValorFinal(valorzaofinallegal)
        console.log(valorFInal)
        
    })
    return (
        <div className="Item">
            <h2>{titulo}</h2>
            <img src={imagem} alt="item" />
            <p>{descricao}</p>
            <p>R${preco}</p>
            <p>{count}</p>
            <div>
                <Button funcao={remover}>-</Button>
                <Button funcao={adicionar}>+</Button>
            </div>
    
                <Button>Adicionar ao carrinho</Button>
            
            <p>Valor Total: R${valorFInal}</p>
        </div>

            )
        }
        
        
export default Item; 