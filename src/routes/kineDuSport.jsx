import React from "react";
import Title from "../components/Title";
import Nav from "../components/Nav";
import auxerre from "../images/auxerre.jpg";
import goal from "../images/goal.svg";

const kineDuSport = () => {
  return (
    <div>
      <Title />
      <Nav />
      <div className="auxerre">
        <img
          className="auxerre-img"
          src={auxerre}
          alt="équipe A.J. Auxerre"
        />
        <div className="auxerre-story">
          <img
            className="auxerre-story-img"
            src={goal}
            alt="gardien de but"
          />
          <h2>
            Kiné de l'A.J. Auxerre 1986-1990
          </h2>
          <p>
            Responsable des soins
            Kinésithérapeutiques de l'équipe
          </p>
        </div>
      </div>
    </div>
  );
};

export default kineDuSport;
