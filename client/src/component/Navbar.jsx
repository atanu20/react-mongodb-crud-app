import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar =()=>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
  <NavLink className="navbar-brand" to ="/">
      <h3 className="text-white">lOGO</h3>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
 
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/add">Add New</NavLink>
        
      </li>
     
    </ul>
    
  </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;