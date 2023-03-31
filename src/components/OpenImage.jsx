import React from "react";

const imgs = require.context('../imgs/Galery', true); 

function OpenImage(props) {

    const [actual, setActual] = React.useState(props.i)


    const left = () =>{
        let aux = actual.slice(2, -4)
        console.log(aux)
        setActual(`./${aux-1}.jpg`)
    }

    const right = () => {
        let aux = actual.slice(2, -4)
        let aux1 = parseInt(aux)
        console.log(aux1)
        setActual(`./${aux1+1}.jpg`)
    }

    return (
        <div id='openImage'>
            {actual!="./0.jpg" ? <div onClick={left} className="arrowleft"></div> : false}
            <img className="imageOpen" src={ imgs(actual)} alt="" />
            {actual!="./64.jpg" ? <div onClick={right} className="arrowright"></div> : false}
        </div>
    );
}

export default OpenImage;