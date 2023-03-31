import React from "react";
import face1 from '../imgs/rostro.jpg'
import face2 from '../imgs/rostro2.jpg'
import face3 from '../imgs/rostro3.jpg'
import teatroimg from '../imgs/TEATRO - Vecinos Eternos 2023 Ph_ Janvier Villegas(1).jpg'
import teatroInfImg from '../imgs/TEATRO INFANTIL - Érase una vez en Cuyo 2022(1).jpg'
import improvisacion from '../imgs/IMPROVISACIÓN - Impros Minimas 2023.jpg'
import publicidad from '../imgs/PUBLICIDAD - Durang S.R.L. 2022.jpg'
import intervencion from '../imgs/INTERVENCIONES - Primavera Folck 2022.jpg'
import audiovisual from '../imgs/AUDIOVISUAL - Corto CORAZON EN VILO dirección Juan Pablo Lopez.jpg'
import ExperienceCard from "./ExperienceCard";
import ExperienceDetail from "./ExperienceDetail";
import Reel from "./Reel";

function Experience() {

    const [expD, setExpD] = React.useState(false)
    const [obj, setObj] = React.useState({})
    const [reel, setReel] = React.useState(false)

    const exp = [
        {
            category: "Teatro",
            img: `${teatroimg}`,
            experience: [
                {
                    title:"La farsa de los ausentes",
                    director: "Juan Comotti",
                    date: "2018"
                },
                {
                    title:"Tribuna Capuleto",
                    director: "Juan Comotti",
                    date: "2018"
                },
                {
                    title:"Vecinos Eternos",
                    director: "Gerónimo Miranda",
                    date: 2023
                }
            ]
        },
        {
            category: "Teatro Infantil",
            img: `${teatroInfImg}`,
            experience: [
                {
                    title:"Un principe para la Risa",
                    director: "Esteban Agnello - Flavio Villalobos",
                    date:"2014-2015"
                },
                {
                    title:'Creadores de Aventuras',
                    director:"Esteban Agnello",
                    date: "2015 - 2016"

                },
                {
                    title: 'Érase una vez en Cuyo',
                    director: "Danyel Bustos",
                    date: "2022"
                }
            ]
        },
        {
            category: "Improvisación",
            img: `${improvisacion}`,
            experience: [
                {
                    title: 'Liga Mendocina de Improvisación',
                    date: "2011 - 2019",
                    link: "https://www.instagram.com/ligaimpromza/"
                },
                {
                    title: 'Improvisaciones Minimas',
                    date: "2015 - 2023",
                    link: "https://www.instagram.com/tostadorateatro/"
                },
                {
                    title: 'Agón, impro en tiempos de tragedia',
                    date: "2019"
                },
                {
                    title: "Sin Rodeos",
                    date: "2022 - 2023",
                    link:"https://www.instagram.com/_sinrodeos_/"
                }
            ]
        },
        {
            category: "Publicidad",
            img: `${publicidad}`,
            experience: [
                {
                    title: "Regency Casino",
                    date: "Julio 2014"
                },
                {
                    title: "Somos Pileteros - Estación del Sol",
                    date: "Enero 2014"
                },
                {
                    title: "Wines of Argentina",
                    date: "Noviembre 2015"
                },
                {
                    title: "No compres robado - Gobierno de Mendoza",
                    date: "2016"
                },
                {
                    title: "Banco Santander",
                    date: "Agosto 2019"
                },
                {
                    title: "Revancha Verano - Fernet Branca",
                    date: "Noviembre 2021"
                },
                {
                    title: "Te quiero tanto - Vino Argentino",
                    date: "Noviembre 2022"
                },
                {
                    title: "Mundialera - Durang SRL",
                    date: "Noviembre 2022"
                },
                {
                    title: "Producción Cambré Indumentaria",
                    date: "Agosto 2022"
                }
            ]
        },
        {
            category: "Audiovisual",
            img: `${audiovisual}`,
            experience: [
                {
                    title:"Corazón en vilo",
                    date: "2021",
                    director: "Juan Pablo López",
                    link: "https://www.youtube.com/watch?v=p_iSNia9Gis&ab_channel=JuampaLopezArte"
                },
                {
                    title: "Sircus",
                    date: "2020",
                    director: "Esteban Agnello",
                    link: "https://youtu.be/xa1S3WHEWHY"
                },
                {
                    title: "Fiebre",
                    date: "2013",
                    director: "Facundo Romero",
                    link: "https://www.youtube.com/watch?v=HfdcyaWw2fs&ab_channel=FacundoRomero"
                }
            ]
        },
        {
            category: "Intervenciones artísticas",
            img: `${intervencion}`,
            experience: [
                {

                },
                {

                }
            ]
        },

    ]

    const handleDetail = (bool, category, img, experience) => {
        setExpD(bool)
        setObj({
            ...obj,
            category,
            img,
            experience
        })
        console.log(obj)
    }

    const handleCloseDetail = () => {
        setTimeout(()=>setExpD(false),500)
    }

    const handleReel = (bool) => {
        setReel(bool)
    }


    return (
        <div>
            {reel? <div className="reelContainer">
                <button className="closeButtonImage" onClick={e => handleReel(false)}>X</button>
                <div className="reel">
                    <Reel/>
                </div>
            </div> : false}
            <div className="animationFace">
                <img className="face1" src={face1} alt="" />
                <img className="face2" src={face2} alt="" />
                <img className="face3" src={face3} alt="" />
            </div>
            <button className="openReel" onClick={e => handleReel(true)}>Ver Reel Actoral</button>

            <div className="expContainer">
                <div className="titleExpSpace">
                    <div className="titleExp">
                        Experiencia
                    </div>
                </div>
                <div id="cards">{/* Posicionador de Smooth */}</div>
                
                <div  className="cardContainer">
                    {exp.map(e => <div onClick={event => handleDetail(true, e.category, e.img, e.experience)} ><a href="#experience"><ExperienceCard href="#experience" category={e.category} img={e.img} experience={e.experience} /> </a></div>)}
                    <div id="experience" className="space">{/* Posicionador de Smooth */}</div>
                </div>
                {expD ? <div className="experienceDContainer"><ExperienceDetail category={obj.category} img={obj.img} experience={obj.experience} />             <div>
            <a href="#cards"><button className="upButton" onClick={handleCloseDetail}>Subir</button></a>
            </div> </div> : false}
            
            </div>
            <div className="space"></div>
        </div>
    );
}

export default Experience;
