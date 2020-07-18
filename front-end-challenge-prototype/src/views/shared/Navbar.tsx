import React from "react";

interface INavbarProps{
  isLoggedIn: boolean;
}

function Navbar(props: INavbarProps): JSX.Element {
  return <h2>Navbar</h2>;
}

export default Navbar;
