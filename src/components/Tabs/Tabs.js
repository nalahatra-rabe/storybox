import React from 'react'
import './style.scss'

function Tabs() {
  return (
    <div data-theme='light' className='Tabs'>
        <table>
             <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Taille</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Photo.jpg</td>
                        <td>2.9 MB</td>
                        <td>Public</td>
                        <td>Mai.13.2022</td>
                        <td>
                            <button>
                                <i className='fa fa-arrow-alt-circle-down'></i>
                            </button>
                            <button>
                                <i className='fa fa-trash-alt'></i>
                            </button>   
                        </td>
                    </tr>
                    <tr>
                        <td>Audio.mp3</td>
                        <td>12.9 MB</td>
                        <td>Public</td>
                        <td>Mai.13.2022</td>
                        <td>
                            <button>
                                <i className='fa fa-arrow-alt-circle-down'></i>
                            </button>
                            <button>
                                <i className='fa fa-trash-alt'></i>
                            </button>   
                        </td>
                    </tr>
                    <tr>
                        <td>Photo.jpg</td>
                        <td>2.9 MB</td>
                        <td>Public</td>
                        <td>Mai.13.2022</td>
                        <td>
                            <button>
                                <i className='fa fa-arrow-alt-circle-down'></i>
                            </button>
                            <button>
                                <i className='fa fa-trash-alt'></i>
                            </button>   
                        </td>
                    </tr>
                    <tr>
                        <td>Audio.mp3</td>
                        <td>12.9 MB</td>
                        <td>Public</td>
                        <td>Mai.13.2022</td>
                        <td>
                            <button>
                                <i className='fa fa-arrow-alt-circle-down'></i>
                            </button>
                            <button>
                                <i className='fa fa-trash-alt'></i>
                            </button>   
                        </td>
                    </tr>
                    
                </tbody>
        </table>
    </div>
  )
}

export default Tabs