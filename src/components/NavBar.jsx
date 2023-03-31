import React from "react";
import styles from "./Styles.css"
import menu from "../imgs/menu.png"
import { Link } from "react-router-dom";

function NavBar() {

  const [bool, setBool] = React.useState(false)

  const handleMenu = (bool) => {
    setBool(bool)
  }

  return (
    <div>
    <div className={bool?"navOpen":"navBar"}>
      <Link to="/"><div onClick={e => handleMenu(false)} class="navoption" >Inicio</div></Link>
      <Link to="/about"><div onClick={e => handleMenu(false)} class="navoption" >Sobre mi</div></Link>
      <Link to="/gallery"><div onClick={e => handleMenu(false)} class="navoption" >Galeria</div></Link>
      <Link to="/experience"><div onClick={e => handleMenu(false)} class="navoption" >Experiencia</div></Link>
      <Link to="/contact"><div onClick={e => handleMenu(false)} class="navoption" >Contacto</div></Link>
      
    </div>
    <div className="menu" onClick={e => bool? handleMenu(false): handleMenu(true)}><img class='menuImg' src={menu} alt="" /></div>
    </div>
  );
}

export default NavBar;
