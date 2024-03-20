import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const LinkCards = links.map((linkObj) => {
    return (
      <a key={linkObj} href={linkObj}>
        {linkObj}
      </a>
    );
  });

  return <nav>{LinkCards}</nav>;
}

export default NavBar;
