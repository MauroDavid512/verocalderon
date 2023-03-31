import React from "react";
import logoInsta from "../imgs/logoinsta.png"
import imgContact from "../imgs/CAMBRÉ-225.jpg"
import logoGmail from '../imgs/logoGmail.png'
import { Link }  from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard";


function Contact() {
  return (
    <div >
      <img className="imgContact" src={imgContact} alt="" />
      <div className="escribime">
        ESCRIBIME
      <div className="contactContainer">
        <a target="_blank" href="https://www.instagram.com/vero.caldn/"><img title="Ir a Instagram" className="logoContact" src={logoInsta} alt="" /></a>
        <CopyToClipboard text="verocalderon23@gmail.com">
        <img title="Copiar dirección de correo" className="logoContact" src={logoGmail} alt="" />
        </CopyToClipboard>
        </div>
        </div>
    </div>
  );
}

export default Contact;
