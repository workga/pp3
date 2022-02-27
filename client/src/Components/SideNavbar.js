
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SideMenuData from '../Utils/SideMenuData'

import './SideNavbar.css'

function SideNavbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
        

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
          <ul className='nav-menu-items' >
          <h1 className="col mx-2">Фильтры</h1>
            {SideMenuData.map((item, index) => {
              return (
                
                  <li key={index} className={item.cName}>
                    
                        
                        
                        <input className="filter" type="checkbox" name={item.filterName} value={item.filterName}/>
                          {item.filterName}

                        
                        
                    
                  </li>
                
              );
            })}
            <div className="apply-filters-button">Применить</div>
          </ul>
        </nav>

    </div>
  );
}

export default SideNavbar;