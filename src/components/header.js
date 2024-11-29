import React from "react";

import "./headStyle.css";
function Header(){
    return(
        <header>
              <div class="logo">Logo</div>
           <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Service</a>
        <a href="#">Blog</a>
    </nav>
    <div class="auth-buttons">
        <button class="sign-in">Sign in</button>
        <button class="log-in">Log in</button>
    </div>
        </header>
    );
}
export default Header;