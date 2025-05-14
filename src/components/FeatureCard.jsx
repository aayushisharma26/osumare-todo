import React from "react";

export const FeatureCard = ({ icon, title, description, number }) => {
  return (
    <div className="feature-card">
      <div className="card-number-container" aria-hidden="true">
        <span className="card-number">{number}</span>
      </div>
      <div className="card-content">
        <div className="icon-wrap">
          <img src={icon} alt={title} className="icon" />
        </div>
        <h3 className="card-title">{title}</h3>
        <div className="card-underline"></div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

