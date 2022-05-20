import React from 'react'
import './style.scss'

function Files() {
  return (
    <div data-theme='light' className='Files'>
        <div className="Files-title">
            <div className="Icon">
                <i className='fa fa-file'></i>
            </div>
            <div className="Name">
                <h4>Prevusualisation du fichier</h4>
            </div>
        </div>
        <div className="Files-bar"></div>
        <div className="Files-Icon">
            <i className="fa fa-file-pdf"></i>
            <div>
                <h4>Licence Agreementon Waterfall INC.pdf</h4>
                <span>2.5 Mo <span className='upload_time'>01H 30M 45S</span></span>
            </div>
        </div>
        <div className="Files-bar"></div>
        <div className="Files-desc">
            <h4>Description du fichier</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste voluptas explicabo sapiente ipsam beatae nobis. Velit expedita repellendus maiores totam.</p>

        </div>
        <div className="Files-bar"></div>
     
        <div className="Files-btn">
 
      
            <div className="Btn">
               <button type='button'><i className="fa fa-download"></i>Telecharger</button>
            </div>
        </div>
    </div>
  )
}

export default Files