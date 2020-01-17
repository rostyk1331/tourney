import React from 'react';
import logo from '../LoginPage/logo.png';
import avatar from '../Header/avatar.png';
import styles from './style.module.scss';

class Header extends React.Component {
    render() {
        return (
            <ul className={styles['navbar']}>
                <li><img src={logo} className={styles["logo-header"]}/></li>
                <div className={styles["menu-container"]}>
                    <li><a href="#">Event Production</a></li>
                    <li><a href="#">Event Search</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
                <li><img src={avatar} className={styles["avatar"]}/></li>
            </ul>
        )
    }
}

export default Header;
