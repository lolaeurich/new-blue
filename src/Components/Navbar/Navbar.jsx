import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navigate = useNavigate();


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="nav">
            <div className="nav-container">
                <img className="nav-logo" alt="" src={logo} onClick={handleHome} />
                <div className="nav-sanduiche" onClick={toggleDropdown}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="nav-menu-desktop">
                    <ul className="desktop-menu-list">
                        <li>Sobre Nós</li>
                        <li>Nossos Negócios</li>
                        <li>Na Mídia</li>
                        <li>Blue Social</li>
                        <li>Empreendimentos</li>
                        <li>Quero ser um parceiro</li>
                    </ul>
                </div>

              
           
                {isDropdownOpen && (
    <div className="dropdown">
        <button className="close-button" onClick={closeDropdown}>X</button>
        <ul className="dropdown-list">
            <li>Sobre Nós</li>
            <li>Nossos Negócios</li>
            <li>Na Mídia</li>
            <li>Blue Social</li>
            <li>Empreendimentos</li>
            <li>Quero ser um parceiro</li>
        </ul>
        <div className="sociais">
            <button className="parceiro-btn">Área restrita</button>
        </div>
    </div>
)}


                       
        </div>
        </div>
    );
}

export default Nav;
