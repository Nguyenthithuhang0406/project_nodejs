/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const MainContent = ({children}) => {
  return ( 
  <SMainContent>
    <div className='container'>{children}</div>
  </SMainContent>
  );
};

export default MainContent;
const SMainContent = styled.div``;