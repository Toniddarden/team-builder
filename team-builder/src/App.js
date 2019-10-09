import React, { useState } from "react";

import "./styles.scss";

import data from "./data";
import Member from "./component/member";
import MemberList from "./component/memberList";

function App() {
  const [members, setMembers] = useState(data);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Join The Team</h1>
      <MemberList addMemberName={addMember} />
      <Member memberList={members} />
    </div>
  );
}

export default App;
