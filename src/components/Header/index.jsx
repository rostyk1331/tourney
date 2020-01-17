import React from 'react';
import logo from '../LoginPage/logo.png';
import avatar from '../Header/avatar.png';
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <ul className="navbar">
                <li><img src={logo} className="logo"/></li>
                <div className="menu-container">
                    <li><a href="#">Event Production</a></li>
                    <li><a href="#">Event Search</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
                <li><img src={avatar} className="avatar"/></li>
            </ul>
        )
    }
}

export default Header;
