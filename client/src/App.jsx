// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './shared/layout';
import Home from './page/Home';
import Register from './page/Register';
import Login from './page/Login';
import About from './page/About';
import Contact from './page/Contact';
import NotFound from './page/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    
    </BrowserRouter>
  );
};

export default App;