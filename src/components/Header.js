import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header class="site-header">
      <div class="site-identity">
        <h1>
          <a href="#"></a>
        </h1>
      </div>
      <nav class="site-navigation">
        <ul class="nav">
          <li>
            <button className="button">Create Proposal</button>
          </li>
          <li>
            <button className="button">Connect Wallet</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
