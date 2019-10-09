import React from "react";

const Member = props => {
  console.log(props);
  return (
    <div className="member-list">
      {props.memberList.map(member => {
        return (
          <div className="member" key={member.id}>
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
