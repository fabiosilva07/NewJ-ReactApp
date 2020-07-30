import React from "react";
import Logo from "../../assets/imgs/Logo.jpg";
import "./Menu.css";
//import Button from "../Button";
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/"><img className="Logo" src={Logo} alt="Logo NerdFlix" /></Link>
            <Link as={Link} to="/cadastro/conteudo" className="ButtonLink">Novo Conteúdo</Link>
        </nav>
    );
}

export default Menu;