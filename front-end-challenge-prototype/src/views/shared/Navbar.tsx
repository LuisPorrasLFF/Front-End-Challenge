import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { INavbarTab } from "../../utilities/INavbarTab";

interface INavbarProps {
  navbarTabs: INavbarTab[];
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
  return (
    <NavbarStyle>
      <ul>
        {props.navbarTabs.map(
          function(navbarTab: INavbarTab, i: number): ReactNode{
            return <li key={i}><Link to={navbarTab.to}>{navbarTab.name}</Link></li>
          }
        )}
      </ul>
    </NavbarStyle>
  );
}

export default Navbar;
