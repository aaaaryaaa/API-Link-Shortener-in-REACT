import React, { useState } from 'react';
import hamburgermenu from '../image/hamburgermenu.svg';
import logo from '../image/shortlylogo.png';

export default function Navbar(){
    const [resp,setresp] = useState(false)
    return(
        <>
            <div className="Navbar py-5 container">
                <div className="">
                    <div className="row">
                        <img className="navimg col-5 text " src={logo} alt="SHORTLY"  /*style={{width:"auto",height:"4.2rem"}}*//>

                        <div className="col-9 d-none d-lg-block text-center">
                            <ul className="" style={{color:"",lineHeight:"2.5rem"}}>
                                <div className="row">
                                    <li className="col-2 text-start"><a className="btn" href="/">Features</a></li>
                                    <li className="col-2 text-start"><a className="btn" href="/">Pricing</a></li>
                                    <li className="col-2 text-start"><a className="btn" href="/">Resources</a></li>
                                

                                
                                    <li className="col-4 text-end"><button className="loginsign btn" style={{color:"black"}}>Login</button></li>
                                    <li className="col-2 text-start"><button className="loginsign btn btn-primary" id="signup">Sign Up</button></li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {resp && (
                        <div className="mobilenav d-lg-none position-absolute start-0 py-2 mt-4 bg-dark text-center " style={{width:"100%"}}>
                            <ul className="" style={{color:"white",lineHeight:"2.5rem"}}>
                                <div className="">
                                    <li className=""><a className="btn" href="/">Features</a></li>
                                    <li className=""><a className="btn" href="/">Pricing</a></li>
                                    <li className=""><a className="btn" href="/">Resources</a></li>
                                </div>

                                <div className="">
                                    <li><button className="loginsign btn" style={{color:"white"}}>Login</button></li>
                                    <li><button className="loginsign btn btn-primary" id="signup">Sign Up</button></li>
                                </div>
                            </ul>
                        </div>
                    )}

                    <button onClick={()=>setresp(!resp)} className="position-absolute pt-5 navbtn d-lg-none">
                        <img src={hamburgermenu} alt="" style={{width:"auto",height:"2rem"}}/>
                    </button>
                </div>
            </div>
        </>
    );
}