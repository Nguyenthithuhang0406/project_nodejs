// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./shared/layout";
import Home from "./page/Home";
import Register from "./page/Register";
import Login from "./page/Login";
import About from "./page/About";
import Contact from "./page/Contact";
import NotFound from "./page/NotFound";
import "react-toastify/dist/ReactToastify.css";

import Profile from "./page/Profile/index";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import DetailPost from "./page/DetailPost";


// Create a client
const queryClient = new QueryClient();

export const AppContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<DetailPost />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <ToastContainer />
        </BrowserRouter>
      </AppContext.Provider>
    </QueryClientProvider>
  );
};
export default App;
