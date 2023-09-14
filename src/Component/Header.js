import React from "react";

const Header = (props) => {
  return (
    <>
      <nav className="navbar">
        <p className="heading">{props.pageTitle}</p>
      </nav>
    </>
  );
};

export default Header;
