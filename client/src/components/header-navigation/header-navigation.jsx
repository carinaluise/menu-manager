import React from 'react';
import './header-navigation.styles.css'


const HeaderNavigation = () =>{
    return(<div className="header-nav sticky-top">
      <h3>Flaming Wok</h3>
      <a className="admin-link" href="/menu-manager">Admin Login</a>

    </div>)

}

export default HeaderNavigation;