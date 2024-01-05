// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { SHeader } from './style';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Image } from 'antd';

import Auth from './Auth';
import User from './User';
import { AppContext } from '../../../App';

const Header = () => {
    const { user } = useContext(AppContext);
  
    return (
      <SHeader>
        <div className="container">
          <div className="header-wrapper">
            <h1 className="logo">Social media</h1>
            <ul className="options">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              {!user ? <Auth /> : <User />}
            </ul>
          </div>
        </div>
      </SHeader>
    );
  };
  

export default Header;