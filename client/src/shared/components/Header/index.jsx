// eslint-disable-next-line no-unused-vars
import React from 'react';
import { SHeader } from './style';
import { Link } from 'react-router-dom';
//import { Image } from 'antd';

const Header = () => {
  return (
    <SHeader>
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
        </ul>
    </SHeader>
  );
};

export default Header;