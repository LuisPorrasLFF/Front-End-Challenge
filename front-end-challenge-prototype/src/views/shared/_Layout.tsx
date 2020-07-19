import React, { ReactNode, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export interface ILayoutProds {
  isLoggedIn: boolean;
  children: ReactNode;
}

function _Layout(props: ILayoutProds): JSX.Element {
  return (
    <Fragment>
      <Navbar>
        {props.isLoggedIn ? (
          <ul>
            <li>
              <Link to="/anime">Anime</Link>
            </li>
            <li>
              <Link to="/character">Characters</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        )}
      </Navbar>
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default _Layout;
