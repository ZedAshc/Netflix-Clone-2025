import React from   'react'

import './Header.css';
import NetflixLogo from '../../assets/images/image.png'; // Added missing semicolon
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from "@mui/icons-material/Search";



function HeaderComponent() {
  return (
    <div className="header_outer_container">
      <div className="header__container"></div>
      <div className="header__left">
        <ul>
          <li>
            <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          </li>
          <li>Netflix</li>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
     
      <div className="header__right">
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default HeaderComponent
