import React from "react";
import styles from "./Styles.css"
import imgAbout from "../imgs/_DSC0800.jpg"

function About() {
    return (
        <div >
            <div>
                <div className="aboutText">
                    <div className="aboutTitle">
                        Sobre mi
                    </div>
                    <br />
                    <div className="aboutDesc">
                        Soy Vero Calderón, soy de Mendoza- Argentina. Comencé mis clases de teatro a los 14 años en Teatro El Taller.
                        <br />
                        Durante todos estos años me he capacitado en actuación, melodrama, actuación frente a cámara, máquinas teatrales, clown, teatro físico e improvisación.
                        Además he tomado clases de danza jazz, dancehall, y acrobacia aérea (trapecio).
                        Me considero una persona responsable y disciplinada, y por sobretodo apasionada por lo artístico que es lo más amo y disfruto hacer.
                        En mi vida personal priorizo mi salud y bienestar, es por ello que llevo una vida sana, soy vegetariana, me encantan los animales y disfrutar de mi familia.
                    </div>
                </div>
                <img class="imgAbout" src={imgAbout} alt="" />
            </div>
        </div>
    );
}

export default About;