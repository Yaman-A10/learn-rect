import React from "react";
import TeamMember from "./TeamMember";
function Team(){
    return(
        <div className='row'>
            <TeamMember name='Yaman'/>
            <TeamMember name='wisaam'/>
            <TeamMember name='Mumen'/>
        </div>
    )
}
export default Team