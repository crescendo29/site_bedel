import React from "react";
import Title from "../components/Title";
import Nav from "../components/Nav";
import sport from "../images/sport.svg";

const votreKine = () => {
  return (
    <div>
      <Title />
      <Nav />
      <div className="curriculum">
        <img src={sport} alt="exercice" />
        <ul className="curriculum-list">
          <li className="curriculum-list-element">
            Diplômé de l'IFK Rennes en 1985
          </li>
          <li className="curriculum-list-element">
            Spécialisation Kiné du sport à
            l'Hôpital Avicenne de Bobigny en 1986
          </li>
          <li className="curriculum-list-element">
            Formation Kiné du sport à l'INSEP en
            1987
          </li>
          <li className="curriculum-list-element">
            Kiné de l'A.J. Auxerre de 1986 à 1990
          </li>
          <li className="curriculum-list-element">
            Kiné à l'Institut Louison Bobet du
            Sofitel de Quiberon(56) en 1990
          </li>
        </ul>
      </div>
    </div>
  );
};

export default votreKine;
