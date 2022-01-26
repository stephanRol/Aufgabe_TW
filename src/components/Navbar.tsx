import React from 'react';
// import burgerMenu from './../assets/Burger_Menu_Icon/BurgerMenuIcon.png'

const Navbar = () => {
    return <div className='navbar-container'>
        <div className="menu-logo-container">
            <div className="menu-logo-img"></div>
            <p className="menu-logo-text">MENÜ</p>
        </div>
        <div className="login-logo-container">
            <div className="login-logo-img"></div>
            <p className="login-logo-text">LOGIN</p>
            <p></p>
        </div>
    </div>;
};

export default Navbar;
