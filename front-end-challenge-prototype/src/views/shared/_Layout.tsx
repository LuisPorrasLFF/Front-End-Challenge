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
            <Link to="/anime">
              <li>Anime</li>
            </Link>
            <Link to="/character">
              <li>Character</li>
            </Link>
          </ul>
        ) : (
          <ul>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Sign Up</li>
            </Link>
          </ul>
        )}
      </Navbar>
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default _Layout;
