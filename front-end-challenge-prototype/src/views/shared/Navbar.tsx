import React, { ReactNode } from "react";
import styled from "styled-components";

interface INavbarProps {
  children: ReactNode;
}

export const NavbarStyle = styled.div`
  background-color: red;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      width: fit-content;
      padding: 0 0.5rem 0 0.5rem;
      &:hover {
        background-color: black;
        a {
          color: red;
        }
      }
      a {
        color: black;
      }
    }
  }
`;

function Navbar(props: INavbarProps): JSX.Element {
  return <NavbarStyle>{props.children}</NavbarStyle>;
}

export default Navbar;
