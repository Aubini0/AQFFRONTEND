import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";

const Tags = ({ heading }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className='tag-container'>
      <h3>{heading}</h3>
      <div className='tag'>
        {heading === "Interest/Topics"
          ? user.interestedTopics.map((topic, i) => (
              <span key={i}>{topic}</span>
            ))
          : user.challenges.map((topic, i) => <span key={i}>{topic}</span>)}
      </div>
    </div>
  );
};

export default Tags;
