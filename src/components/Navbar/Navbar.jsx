import { Component, useState } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems/MenuItems";
import { Link } from "react-router-dom";



function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

         return(
            <nav className="NavbarItems" >
            <h1 className="navbar-logo">
              Trippy</h1>

            <div className="menu-icons" onClick ={() => handleClick()}>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
              </div>        
            

            <ul  className={clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((items, index) =>{
                return(
              <li key={index}> 
                  <Link className={items.cName}
                  to={items.url}>
                    <i className={
                      items.icon
                    }></i>{items.title}
                  </Link>
              </li>
                );
              })} 
              <button>Sign Up</button>
              
            </ul>
          </nav>  
        )
    }
export default Navbar; 

