import React, { ReactNode } from "react";

interface INavbarProps {
  children: ReactNode;
}

function Navbar(props: INavbarProps): JSX.Element {
  return <div>{props.children}</div>;
}

export default Navbar;
