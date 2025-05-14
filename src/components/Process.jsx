import React from "react";
import {FeatureCard} from "./FeatureCard";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"


const features = [
  {
    icon:icon1,
    title: "User-Friendly Interface",
    description: "Our platform offers seamless task management to boost your efficiency.",
    number: "01",
  },
  {
    icon: icon2,
    title: "Collaborate & Share Effortlessly",
    description: "Invite team members to work together and achieve your goals faster.",
    number: "02",
  },
  {
    icon: icon3,
    title: "Effortless Collaboration",
    description: "Invite team members to work together and achieve your goals faster.",
    number: "03",
  },
  {
    icon: icon4,
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
    number: "04",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-head">
          Transform Your Productivity with Our<br />
          Innovative To-Do List Features
        </h2>
 
        <div className="features-container">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              number={feature.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


