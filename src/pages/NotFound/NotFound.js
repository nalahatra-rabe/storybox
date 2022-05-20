import React from 'react'
import './style.scss'

function NotFound() {
  const  back = () => {
    window.history.back();
  }
  return (
    <div data-theme='light' className='NotFound'>
        <div className="NotFound-head">
            <h1>O O P S !</h1>
            <div className="Erreur">
                <p>404 - <span> Page  introuvable</span></p>
            </div>
            <button type='button' className='btn_back_page' onClick={back}>Revenir a la page precedent</button>
        </div>
    </div>
  )
}

export default NotFound