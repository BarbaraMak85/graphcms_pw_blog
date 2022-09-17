import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Logo />
    <Header />

    {children}
  </>
);

export default Layout;
