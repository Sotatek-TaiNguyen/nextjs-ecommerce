import React from "react";
import Notify from "./Notify";
import NavBar from "./NavBar";
function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />
      <Notify />

      {children}
    </div>
  );
}

export default Layout;
