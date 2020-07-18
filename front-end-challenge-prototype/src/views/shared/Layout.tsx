import React, { ReactNode, Fragment } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export interface ILayoutProds {
  isLoggedIn: boolean;
  children: ReactNode;
}

function Layout(props: ILayoutProds): JSX.Element {
  console.log(props.children);
  return (
    <Fragment>
      <Navbar isLoggedIn={props.isLoggedIn} />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
