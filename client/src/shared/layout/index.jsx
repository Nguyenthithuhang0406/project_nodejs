/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../../hooks/useAuth";
import MainContent from "../components/MainContent";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { getMe } = useAuth();

  useEffect(() => {
    getMe();
  }, []);
  return (
    <div>
      <Header />
      <MainContent>{children}</MainContent>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
