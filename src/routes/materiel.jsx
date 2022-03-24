import React from "react";
import Title from "../components/Title";
import Nav from "../components/Nav";
import kineQuantum from "../images/Kinequantum.png";
import arrow from "../images/arrow.svg";

const materiel = () => {
  return (
    <div>
      <Title />
      <Nav />
      <div className="cards">
        <div className="traditionnel-card">
          <p>
            <strong>
              Afin de vous proposer la meilleure
              qualité de soins, une prise en
              charge individualisée vous sera
              proposée :
            </strong>
          </p>
          <ul>
            <li>
              une kinésithérapie dite " passive "
              ou " manuelle " (massage,
              mobilisations, étirements)
            </li>
            <li>
              une kinésithérapie dite " active "
              (renforcement musculaire,
              stabilisationn neuro-musculaire)
            </li>
            <li>
              mise en oeuvre de la thérapie laser
            </li>
            <li>
              utilisation de la réalité virtuelle
            </li>
          </ul>
        </div>

        <div className="kLaser-card">
          <a href="https://klaserfrance.fr/">
            <img
              className="kLaser-img"
              src="https://klaserfrance.fr/wp-content/uploads/logo-klaser-aujourdhui-veclogo.svg"
              alt="logo de k-laser"
            />
            <p>En savoir plus </p>
            <img
              className="arrow"
              src={arrow}
              alt="flèche"
            />
          </a>
          <h4>
            La thérapie laser haute puissance, un
            procédé novateur
          </h4>
          <p>
            Il est désormais possible de soigner
            de multiples pathologies de l’appareil
            locomoteur par de la lumière à haute
            énergie sous forme de faisceau laser.
            La thérapie laser devient un outil du
            quotidien dans les cabinets de
            physiothérapie, podologie,
            dermatologie et esthétique, médecine
            du sport, équipes sportives et dans
            les centres hospitaliers – unités
            d’oncologie, de cicatrisation et
            anti-douleur.
          </p>
          <p>
            Le traitement est non invasif, simple
            à mettre en oeuvre, indolore et non
            dangereux. Les champs d’applications
            ne cessent d’augmenter, des milliers
            d’études scientifiques validant les
            nouvelles avancées.
          </p>
          <p>
            Le but est d’accélérer le processus
            naturel de régénération cellulaire et
            booster les tissus lésés. La lumière
            stimule les cellules, relance le
            système immunitaire, active la
            réparation tissulaire tout en
            diminuant dès la 1ère séance
            inflammation, oedème et douleur.
          </p>
        </div>
        <div className="kineQuantum-card">
          <a href="https://www.kinequantum.com/">
            <img
              className="kineQuantum-img"
              src={kineQuantum}
              alt="logo de kine quantum"
            />
            <p>
              En savoir plus{" "}
              <img
                className="arrow"
                src={arrow}
                alt="flèche"
              />
            </p>
          </a>
          <h4>
            Pourquoi la thérapie en réalité
            virtuelle ?
          </h4>
          <p>
            Espace patients Pourquoi la thérapie
            en réalité virtuelle ? Tirer à l’arc
            au moyen-âge, nager dans l’océan
            pacifique, voler au-dessus d’une forêt
            ou vous promener dans la jungle ….
            sans quitter le cabinet de votre kiné
            ! Grâce à la thérapie de rééducation
            en réalité virtuelle, découvrez une
            nouvelle manière de vous rééduquer en
            complément de vos séances habituelles.
            Demandez KineQuantum à votre kiné.
          </p>
          <h5>
            Qu'est-ce que la réalité virtuelle ?
          </h5>
          <p>
            C'est une technologie de pointe
            permettant d'immerger complètement le
            patient dans un monde fictif. Grâce à
            un masque de réalité virtuelle le
            champ de vision est recouvert d’un
            affichage panoramique qui permet une
            mise en situation. La réalité
            virtuelle permet ainsi un niveau
            d'immersion inédit ! Vous n'êtes plus
            simplement un observateur externe
            d’images face à un écran, mais devenez
            un participant actif à l’intérieur du
            monde virtuel.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default materiel;
