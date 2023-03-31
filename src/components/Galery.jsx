import React from "react";
import OpenImage from "./OpenImage";
const imgs = require.context('../imgs/Galery', true); 


function Galery() {



    const[arr, setArr] = React.useState([])

    const[bool,  setBool] = React.useState(false)

    const[aux1, setAux] = React.useState(null)

    const showGallery = () =>{
        let aux = []
        for(let i = 0; i<=64; i ++){
            aux = [...aux,`./${i}.jpg`] 
            console.log() 
        } 
        setArr(aux)
    }

    React.useEffect(() => {
        setArr([])
        showGallery();
        console.log(arr);

    },[]
    )

    const handleOpenImage = (event, i) => {
        event.preventDefault()
       setBool(true)
       setAux(i)
    }

    const handleCloseImage = () => {
        setBool(false)
    }

    
    

    return (
        <div >
            
            <div className="galeryTitle"><div className="top">Galeria</div></div>
            
            <div className="galery">
                
            {arr.length>0?arr.map((e) => <div className="divImage" onClick={event => handleOpenImage(event, e)} ><a href="#openImage"><img className="galeryImage" src={ imgs(e)} alt="image" /></a></div>) :false}
            </div>
            {
                bool? <div className="openImageContainer"> <div className="marginOpen"><button className="closeButtonImage" onClick={handleCloseImage}>x</button><OpenImage i={aux1} /></div></div> : false
            }
        </div>
    );
}

export default Galery;