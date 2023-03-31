import React from "react";


function ExpDetailCard(props) {
    return (
        <div className="expDetailCard">
            <div className="titleExpDetail">{props.title}</div>
            <div>{props.director? `Dirección: ${props.director}` : false}</div>
            <div>{props.date? props.date : false}</div>
            <div>{props.description? props.description : false}</div>
            {props.link? <a href={props.link} target="_blank">Link</a> : false}
        </div>
    );
}

export default ExpDetailCard;