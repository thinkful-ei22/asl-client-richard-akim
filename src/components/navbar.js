import React from "react";

function NavBar(props) {
  return (
    <nav className="nav navBar">
      <h1 className="nav-header nav">
        {" "}
        uh
        <strong>SIGN</strong>
        ment!{" "}
      </h1>
      {/* This link container will take an array of objects, with href and name
      keys to generate links.
      */}
      <ul className="nav-link-container nav">
        {props.links.forEach(link => {
          return (
            <li className="nav-link">
              <a href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
