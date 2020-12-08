import React, { ReactNode, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { INavbarTab } from "../../utilities/INavbarTab";

export interface ILayoutProds {
  children: ReactNode;
  navbarTabs: INavbarTab[];
}

function Layout(props: ILayoutProds): JSX.Element {
  return (
    <Fragment>
      <Navbar navbarTabs={props.navbarTabs} />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
