import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Accueil
      </Link>
      <Link className="link" to="/votreKine">
        Votre Kiné
      </Link>
      <Link className="link" to="/kineDuSport">
        Kiné du sport
      </Link>
      <Link className="link" to="/materiel">
        Matériel
      </Link>
      <a
        className="link"
        href="https://www.doctolib.fr/masseur-kinesitherapeute/brest/didier-bedel"
      >
        Rendez-vous
      </a>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
