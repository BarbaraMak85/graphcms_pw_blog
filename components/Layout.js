import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Navbar from "./Navbar";
import CookieInfo from "./CookieInfo";

const Layout = ({ children }) => (
  <>
    <CookieInfo />
    <Navbar />
    <Logo />
    <Header />

    {children}
  </>
);

export default Layout;
