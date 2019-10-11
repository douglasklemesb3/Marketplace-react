import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss"

const NavBar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const AbrirMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const FecharMenu = () =>{
        setMenuAtivo(false)
    }
   

    return (
        <div className="NavBar">
            <nav>
                <div className="ancora">
                <Link onClick={FecharMenu} to='/'> Home</Link>
                <Link onClick={FecharMenu} to="/cadastro"> Cadastro</Link>
                <Link onClick={FecharMenu} to="/">Login</Link>
                <Link onClick={FecharMenu} to="/produto">Produtos</Link>
                </div>
                <div onClick={AbrirMenu} id="menu-hamburguer">
                    <span className={`${menuAtivo ? "virarX1" : ""}`}></span>
                    <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
                    <span className={`${menuAtivo ? "virarX2" : ""}`}></span>
                </div>
            </nav>
            <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
                <Link onClick={FecharMenu} to='/'> Home</Link>
                <Link onClick={FecharMenu} to="/cadastro"> Cadastro</Link>
                <Link onClick={FecharMenu} to="/">Login</Link>
                <Link onClick={FecharMenu} to="/produto">Produtos</Link>
            </section>
        </div>
    );
}
export default NavBar;
