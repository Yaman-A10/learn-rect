import React, { useState } from "react";
import TeamMember from "./TeamMember";

let counter = 1;

function Team() {
  const [teamMembers, setTeamMembers] = useState([
    "Yaman",
    "wisaam",
    "Mumen",
    "Lars",
  ]);

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, `Member ${counter++}`]);
  };

  return (
    <div>
      <div className="row">
        {teamMembers.map((teamMember, index) => (
          <TeamMember key={index} name={teamMember} />
        ))}
      </div>
      <button onClick={addTeamMember}>add team member</button>
    </div>
  );
}
export default Team;
