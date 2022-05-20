import React from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

// images
import logo from "../../assets/images/logo.png";
import waves from "../../assets/images/wave.svg";
import headerVector from "../../assets/images/vect.png";

function Home() {
  return (
    <div data-theme="light" className="Home">
      <Helmet>
        <title>Story Box | Sauvegader votre tout </title>
      </Helmet>
      <img className="waves" src={waves} alt="waves" />
      <div className="nav">
        <div className="nav_brand">
          <img src={logo} alt="logo" />
          <h3>
            <span>Story</span> Box
          </h3>
        </div>
        <div className="nav_menu">
          <Link to="#about">Apropos</Link>
          <Link to="#work">comment ça marche?</Link>
          <Link to="#">Offres</Link>
          <button type="button" className="btn-start">
            <Link to="login">Se Connecter</Link>
          </button>
        </div>
      </div>
      <div className="Home_header" id="about">
        <img src={headerVector} alt="cloud" className="cloud-pic" />
        <div className="header_text">
          <h1>
            Garder tout en sécurité avec <span>Story Box</span> .
          </h1>
          <p>
            Vous Beneficier d'une stockage de sauvegarde et une centre de
            partage des fichers en privé et public.
          </p>
          <div className="ens_btn">
            <button type="button" className="btn_start">
              <Link to="login">Commencer</Link>
            </button>
            <button type="button" className="btn_start">
              Voir plus de detaille
            </button>
          </div>
        </div>
      </div>
      <div className="work" id="work">
        <h1>comment ça marche?</h1>
        <p>Avec une simple démarche et vous etez pret</p>
        <div className="work_step">
          <div className="step_to_step">
            <span>1</span>
            <i className="fa fa-compass"></i>
            <h5>Trouver l'offre qui vous plait</h5>
          </div>
          <div className="step_to_step">
            <span>2</span>
            <i className="fa fa-cloud-upload"></i>
            <h5>Telecherger votre donnees</h5>
          </div>
          <div className="step_to_step">
            <span>3</span>
            <i className="fa fa-chart-pie"></i>
            <h5>Gerer et partager tout avec simplicite</h5>
          </div>
        </div>
      </div>
      <div className="offre">
        <h1>Les Offres disponible</h1>
        <div className="offre_list">
          <div className="list" data-aos="fade-up"  >
            <span className="prix">£ 10</span>
            <span className="uniq">
              <i className="fa fa-shapes"></i>Free
            </span>
            <h1 className="price">1 Go</h1>
            <button className="buy">ACHETER</button>
          </div>
          <div className="list">
            {" "}
            <span className="prix">£ 50</span>
            <span className="uniq">
              <i className="fa fa-fire"></i>Lite
            </span>
            <h1 className="price">50Go </h1>
            <button className="buy">ACHETER</button>
          </div>
          <div className="list">
            {" "}
            <span className="prix">£ 100</span>
            <span className="uniq">
              <i className="fa fa-chess-king"></i>Premium
            </span>
            <h1 className="price">+100Go</h1>
            <button className="buy">ACHETER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
