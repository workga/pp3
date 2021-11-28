
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SideMenuData from '../Utils/SideMenuData'

import './SideNavbar.css'

function SideNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
        <div className='navbar'>
          <Link to='/' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to="/" className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideMenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to="/">
                    <span>{item.filterName}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

    </div>
  );
}

export default SideNavbar;