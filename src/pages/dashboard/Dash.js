import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileUploader } from "react-drag-drop-files";
import SemiCircleProgressBar from "react-progressbar-semicircle";

// images //
import logo from "../../assets/images/logo.png";
// components //
//const fileTypes = ["JPG", "PNG", "GIF"];

function Dash() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };
  return (
    <div className="Dash">
      <Helmet>
        <title>Story Box | Table de bord </title>
      </Helmet>
      <div className="Dash_nav">
        <div className="nav_brand">
          <img src={logo} alt="logo" />
          <h3>
            Story <span>Box</span>
          </h3>
        </div>
        <div className="nav_menu">
          <NavLink to="/dash" activeClassName="active">
            <i className="fa fa-qrcode"></i> Dashboard
          </NavLink>
          <NavLink to="/explore" activeClassName="active">
            <i className="fa fa-hiking"></i> Explorer
          </NavLink>
          <NavLink to="/file" activeClassName="active">
            <i className="fa fa-file"></i> Mes Fichier
          </NavLink>
      
        </div>
      </div>
      <div className="Dash_content">
        <div className="content_search">
          <i className="fa fa-search search"></i>
          <input type="text" placeholder="Trouve quelque chose..." />
          <button type="button" className="newPost">
            <i className="fa fa-plus-circle"></i> ajouter un fichier
          </button>
        </div>
        <div className="b_file">
          <h4>Les Fichier </h4>
          <NavLink to="/file"> Voir tout ...</NavLink>
        </div>
        <div className="file">
          <div className="file_item">
            <i className="fa fa-file-pdf"></i>
            <span>50</span> <h4>Documents</h4>
          </div>
          <div className="file_item">
            <i className="fa fa-file-image"></i>
            <span>100</span> <h4>Images</h4>
          </div>
          <div className="file_item">
            <i className="fa fa-file-audio"></i>
            <span>10</span> <h4>Audios</h4>
          </div>
          <div className="file_item">
            <i className="fa fa-file-video"></i>
            <span>50</span> <h4>Videos</h4>
          </div>
        </div>
        <div className="offre">
          <h4>Abonnement</h4>
        </div>
        <div className="offre_resume">
          <div className="card">
            <span>
              <i className="fa fa-fire"></i> Lite
            </span>
            <h5>Fin d'Abonnement au : </h5>
            <h1>12/12/2022</h1>
            <p>Il vous reste 5 jours</p>
            <button>
              <i className="fa fa-pen"></i> Renouveler
            </button>
          </div>
          <div className="card">
            <h5>Espace utilise: </h5>
            <h1>340Mo / 1 Go</h1>
            <p>Il vous reste 6Mo</p>
          </div>
        </div>
        <div className="recent_file">
          <h4>Fichier ajouter recement</h4>
          <NavLink to="/file">Voir tout ...</NavLink>
        </div>
      </div>
      <div className="Dash_resume">
        <div className="resume_head">
          <button>
            <i className="fa fa-bell"></i>
          </button>
          <button>
            <i className="fa fa-user-circle"></i>
          </button>
        </div>
        <div className="resume_bars">
          <SemiCircleProgressBar
            percentage={70}
            stroke={"#5964fe"}
            strokeWidth={20}
            showPercentValue={true}
          />
          <h3>L'etat de votre capacite de stockage</h3>
        </div>
        <div className="file_state">
          <div className="state_file">
            <i className="fa fa-file"></i>
            <span>Documents</span>
            <p>90 fichier</p>
          </div>
          <span className="file_capacity">34Go</span>
        </div>
        <div className="file_state">
          <div className="state_file">
            <i className="fa fa-file-audio"></i>
            <span>Audios</span>
            <p>4 fichier</p>
          </div>
          <span className="file_capacity">1Go</span>
        </div>
        <div className="file_state">
          <div className="state_file">
            <i className="fa fa-video"></i>
            <span>Videos</span>
            <p>5 fichier</p>
          </div>
          <span className="file_capacity">300Mo</span>
        </div>
        <div className="file_state">
          <div className="state_file">
            <i className="fa fa-file-image"></i>
            <span>Images</span>
            <p>10 fichier</p>
          </div>
          <span className="file_capacity">400Ko</span>
        </div>

        <div className="drop_file_are">
          <FileUploader handleChange={handleChange} name={file} />
        </div>
      </div>
    </div>
  );
}

export default Dash;
