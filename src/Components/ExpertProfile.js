import React from "react";
import "../styles/ExpertProfile.scss";

const ExpertProfile = ({ expert }) => {
  return (
    <div className="expert-profile">
      <img src={expert.image} alt={expert.name} className="expert-image" />
      <h2>{expert.name}</h2>
      <h4>{expert.title}</h4>
      <p>{expert.bio}</p>
    </div>
  );
};

export default ExpertProfile;
