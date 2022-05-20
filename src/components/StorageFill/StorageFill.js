import React from 'react'
import './style.scss'

function StorageFill() {
  return (
    <div data-theme='light' className='StorageFill'>   
        <div className="StorageFill-doc">
            <div className="Icon">
                <div>
                    <i className='fa fa-file-alt'></i>
                </div>         
            </div>
            <div className="Content">
                <h4>Documents</h4>
                <span>994 files</span>
            </div>
            <div className="Taille">
                <span>2.9 GB</span>
            </div>
        </div>
        <div className="StorageFill-doc">
            <div className="Icon-Photo">
                <div>
                    <i className='fa fa-image'></i>
                </div>         
            </div>
            <div className="Content">
                <h4>Photos</h4>
                <span>99 files</span>
            </div>
            <div className="Taille">
                <span>12 GB</span>
            </div>
        </div>
        <div className="StorageFill-doc">
            <div className="Icon-Video">
                <div>
                    <i className='fa fa-film'></i>
                </div>         
            </div>
            <div className="Content">
                <h4>Vidéos</h4>
                <span>24 files</span>
            </div>
            <div className="Taille">
                <span>29 GB</span>
            </div>
        </div>
        <div className="StorageFill-doc">
            <div className="Icon-music">
                <div>
                    <i className='fa fa-music'></i>
                </div>         
            </div>
            <div className="Content">
                <h4>Musics</h4>
                <span>994 files</span>
            </div>
            <div className="Taille">
                <span>29 GB</span>
            </div>
        </div>
        <div className="StorageFill-doc">
            <div className="Icon-other">
                <div>
                    <i className='fa fa-file'></i>
                </div>         
            </div>
            <div className="Content">
                <h4>Other Files</h4>
                <span>40 files</span>
            </div>
            <div className="Taille">
                <span>50 GB</span>
            </div>
        </div>
        
    </div>
  )
}

export default StorageFill