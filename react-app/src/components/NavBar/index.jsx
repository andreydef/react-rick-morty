import React from "react";

import './index.css';

function NavBar() {
  return (
    <div className="topnav">
      <a href="/">Characters</a>
      <a href="/locations">Locations</a>
      <a href="/episodes">Episodes</a>
    </div>
  );
};

export default NavBar;