import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEmpreendimentosOpen, setIsEmpreendimentosOpen] = useState(false);
  const empreendimentosRef = useRef(null);

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

  const toggleEmpreendimentos = () => {
    setIsEmpreendimentosOpen(!isEmpreendimentosOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isEmpreendimentosOpen &&
        empreendimentosRef.current &&
        !empreendimentosRef.current.contains(event.target)
      ) {
        setIsEmpreendimentosOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEmpreendimentosOpen]);

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
            <li onClick={toggleEmpreendimentos} className="drop-empreendimentos">Empreendimentos <MdKeyboardArrowDown /></li>
            <li>Quero ser um parceiro</li>
            <li className="sociais">
              <button className="parceiro-btn">Área restrita</button>
            </li>
          </ul>
        </div>

        {isDropdownOpen && (
          <div className="dropdown">
            <button className="close-button" onClick={closeDropdown}>
              X
            </button>
            <ul className="dropdown-list">
              <li>Sobre Nós</li>
              <li>Nossos Negócios</li>
              <li>Na Mídia</li>
              <li>Blue Social</li>
              <li onClick={toggleEmpreendimentos} className="drop-empreendimentos">Empreendimentos <MdKeyboardArrowDown /></li>
              <li>Quero ser um parceiro</li>
            </ul>
            <div className="sociais">
              <button className="parceiro-btn">Área restrita</button>
            </div>
          </div>
        )}

        {isEmpreendimentosOpen && (
          <div ref={empreendimentosRef} className="empreendimentos-dropdown">
            <div className="view-projects-all">
              <h3>Conheça os nossos lançamentos</h3>
              <button className="projects-btn">
                Ver todos os projetos <FaArrowRight />
              </button>
            </div>
            <div className="empreendimentos-list">
              <p className="view-project">
                Aya <FaArrowRight />
              </p>
              <p className="view-project">
                Cena living <FaArrowRight />
              </p>
              <p className="view-project">
                Hit home <FaArrowRight />
              </p>
              <p className="view-project">
                Parque das flores <FaArrowRight />
              </p>
              <p className="view-project">
                Plus Portão <FaArrowRight />
              </p>
              <p className="view-project">
                Elysium <FaArrowRight />
              </p>
              <p className="view-project">
                Bento 246 <FaArrowRight />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
