/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <>
        <li>
            <Link to={"/register"}>Sign up</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
    </>
  );
};

export default Auth;