import React from "react";

function TeamMember (props){
    return(
        <div className="col-md-4">
        <h1>{props.name}</h1>
        </div>
    )
}

export default TeamMember