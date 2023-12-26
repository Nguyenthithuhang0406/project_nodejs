// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  );
};

export default Layout;