import React from "react";


function ExperienceCard(props) {
    return (
        <div className="card">
            <div>
                <img className="imgExp" src={props.img} alt="" />
            </div>
            <div>
                <div className="aboutDesc">
                    {props.category}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;