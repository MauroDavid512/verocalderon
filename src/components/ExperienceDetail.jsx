import React from "react";
import foto from "../imgs/CAMBRÉ-069.jpg"
import ExpDetailCard from "./ExpDetailCard";


function ExperienceDetail(props) {
    return (
        <div className="experienceDetail">
            <h1 className="titleExp">{props.category}</h1>
            <img className="imgExpD" src={props.img} alt="" />
            
            <div className="ExpDetailCardContainer">
            {props.experience.length > 0 ? props.experience.map(e => <ExpDetailCard title={e.title} date={e.date} director={e.director} link={e.link} />) : false}
            </div>

        </div>
    );
}

export default ExperienceDetail;