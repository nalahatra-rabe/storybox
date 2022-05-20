import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// images //
import logo from "../../assets/images/logo.png";
import Files from "../../components/Files/Files";
// components //

function Explore() {
  return (
    <div className="Explore">
      <Helmet>
        <title>Story Box | Explorer </title>
      </Helmet>
      <div className="Explore_nav">
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
      <div className="Explore_content">
        <div className="ex_search">
          <input type="text" placeholder="Vous vouler une fichier ?" />
          <i className="fa fa-search"></i>
        </div>
        <div className="row">
          <div className="column">
            <i className="fa fa-file"></i>
            <p>Cloud Data_JavaEE.pdf</p>
            <div className="file_info">
              <div className="info">
                <h4>taille:</h4>
                <p>2,6 Mo</p>
              </div>
              <button type="button" className="btn"><i className="fa fa-download"></i></button>
            </div>
          </div>
          <div className="column">
            <i className="fa fa-file"></i>
            <p>Cloud Data_JavaEE.pdf</p>
            <div className="file_info">
              <div className="info">
                <h4>taille:</h4>
                <p>2,6 Mo</p>
              </div>
              <button type="button" className="btn"><i className="fa fa-download"></i></button>
            </div>
          </div>
          <div className="column">
            <i className="fa fa-file"></i>
            <p>Cloud Data_JavaEE.pdf</p>
            <div className="file_info">
              <div className="info">
                <h4>taille:</h4>
                <p>2,6 Mo</p>
              </div>
              <button type="button" className="btn"><i className="fa fa-download"></i></button>
            </div>
          </div>
          <div className="column">
            <i className="fa fa-file-pdf"></i>
            <p>Cloud Data_JavaEE.pdf</p>
            <div className="file_info">
              <div className="info">
                <h4>taille:</h4>
                <p>2,6 Mo</p>
              </div>
              <button type="button" className="btn" ><i className="fa fa-download"></i></button>
            </div>
          </div>
        
        </div>
        
      </div>
      <div className="Explore_resume">
        <Files/>
      </div>
    </div>
  );
}

export default Explore;
