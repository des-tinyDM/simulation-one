import React from 'react';
import logo from '../../ShelfieLogo.png'
import './Header.css'

const Header = props => {
    return (
    <div className="header">
        <img className="logo" src={logo}/>
        <h1 className="website-name">SHELFIE</h1>
    </div>
    )
}
export default Header;