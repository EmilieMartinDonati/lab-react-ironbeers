import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
          <NavLink to="/Home">
            <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" height="100px" alt="#"/>
            </NavLink>
        </div>
    )

}

export default Header;