import React, {useState} from 'react'
import './style.scss'
import Images from '../../assets/images/test.jpg'
import axios from 'axios';

const urls = `http://192.168.1.101:3002/api/user`
function Connexion(props) {
    
    const [active, setActive] = useState("First");
    // User Create //
    const addUser = () => {
        axios.post(urls, {
                  "fullName" : "Rabehevitra",
                    "email" : "fitiavananalahatra@gmail.com",
                    "password" : "rabe1811",
                    "country" : "Madagascar",
                    "compteur": 0,
                    "forfait":"premium",
                    "sizeforfait":10
        } )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
  return (
    <div data-theme='light' className='Connexion'>
        <div className="Connexion-header">
            <div className="Title">
                <h4>Story <span>Box</span></h4>
            </div>
            <div className="Content">
                <div className="Content-panel">
                  
                    <div className="Btn">
                        <nav onClick={()=>setActive("Second")}>Se connecter</nav>
                        <nav onClick={()=>setActive("First")}>Créer un compte</nav>                
                    </div>              
                </div>
                <div className="Content-registre"> 
                    {active=="First" && <div className="Registre-form">
                        <div className="Offre">
                            <label htmlFor="">{props.Offre}</label>
                        </div>
                     
                   
                        <form action="" style={{marginTop: "-40px"}}>
                        <div className="Input">
                                <label htmlFor="">Nom complet:</label>
                                <input type="text" name='email' placeholder='Enter votre nom' required/>
                            </div>
                            <div className="Input">
                                <label htmlFor="">Email address</label>
                                <input type="email" name='email' placeholder='Enter your email' required/>
                            </div>
                            <div className="Input">
                                <label htmlFor="">Password</label>
                                <input type="password" name='password' placeholder='Enter your password' required/>
                            </div>
                            <div className="Input">
                                <label htmlFor="">Confirm password</label>
                                <input type="password" name='passwordConfirm' placeholder='Confirm your password' required/>
                            </div>
                            <div className="Input">
                                <label htmlFor="">Country</label>
                                <select name="" id="">
                                    <option value="0">Choose your country</option>
                                </select>
                            </div>
                            <div className="Check">
                            <input type="checkbox"/>
                            <span>Yes,I want emails with inspiration <a href="">terms and conditions.</a></span>
                            </div>         
                            <button type="submit" onClick={addUser} className='btn_login'>Registre</button>
                        </form>
                        <div className="Bar">
                        <div className="Barre"></div>
                        <span>or</span>
                    </div>
                        <nav onClick={()=>setActive("Second")}>Se connecter</nav>
                    </div>}

                    {active=="Second" && 
                     <div className="Registre-form">
                     <div className="Offre">
                         
                         <label htmlFor="">{props.Offre}</label>
                     </div>
                 
                     <form action="">
                        <div className="Input">
                            <label htmlFor="">Email address</label>
                            <input type="email" required placeholder='Enter your email'/>
                        </div>
                        <div className="Input">
                            <label htmlFor="">Password</label>
                            <input type="password" required placeholder='Enter your password'/>
                        </div>
                        <div className="Check">
                        <input type="checkbox"/>
                        <span>Yes,I want emails with inspiration <a href="">terms and conditions.</a></span>
                        </div>         
                        <button type="submit">Se connecter</button>
                     </form>
                     <div className="Bar">
                        <div className="Barre"></div>
                        <span>or</span>
                    </div>
                     <nav onClick={()=>setActive("First")}>Créer un compte</nav>                

                 </div>}
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Connexion