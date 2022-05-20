import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Switch } from "antd";
import { FileUploader } from "react-drag-drop-files";
// images //
import logo from "../../assets/images/logo.png";
// components //
import Tabs from "../../components/Tabs/Tabs";

function File() {
  const [toogle, setToogle] = useState(false);
  const toogler = () => {
    toogle ? setToogle(false) : setToogle(true);
  };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };

  // file handle value input //
  const [desc, setDesc] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Description ${desc}`)
}


  return (
    <div className="File">
      <Helmet>
        <title>Story Box | Mes Fichier </title>
      </Helmet>
      <div className="File_nav">
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
      <div className="File_content">
        <div className="file_search">
          <input type="text" placeholder="Trouver un fichier ..." />
        </div>
        <Tabs />
      </div>
      <div className="File_resume">
     <form onSubmit={handleSubmit}>
     <h3>Ajouter un fichier</h3>
        <label htmlFor="">Description du fichier :</label>
        <input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
        <label htmlFor="">Description du fichier :</label>
        <select >
          <option value="">Audio</option>
          <option value="">Documents</option>
          <option value="">Video</option>
          <option value="">Images</option>
        </select>
        <label htmlFor="">Duree de stockage :</label>
        <input type="date" />

        <div className="switch">
          <Switch onClick={toogler} />
          {toogle ? <span>Public</span> : <span>Prive</span>}
        </div>
        <FileUploader handleChange={handleChange} name={file} />
        <button type="submit" className="add_btn">Telecharger le fichier</button>
     </form>
      </div>
    </div>
  );
}

export default File;
