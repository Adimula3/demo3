import React from "react";
import '../styles/style.css';
function NavMenu() {
    return(
       <header>
           <nav className="navbar navbar-expand-lg ">
               <div className="container-fluid">
                   <a className="navbar-brand" href="https://">repę</a>
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <a className="nav-link active" aria-current="page" href="https://">How it works</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="https://">Services</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="https://">Contractors</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="https://">Gallery</a>
                           </li>
                       </ul>
                   <div className="right-nav">
                       <button type="button" className="btn btn-dark">Login</button>
                       <span className="navbar-text">
                           Get your estimate
                        </span>
                   </div>
                   </div>
           </nav>
       </header>
    );
}

export default NavMenu;
