import React from "react";
import "./styles/styles.css";

function Header(props) {
  return (
    <div className="HeaderContainer">
      <div className="Header">
        <div className="HeaderTitle">
          <h1>Title</h1>
        </div>
        <div className="HeaderProfile">
          <div className="ProfilePicture">
            <i className="bi bi-person-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
