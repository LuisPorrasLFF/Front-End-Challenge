import React from "react";
import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: red;

  p {
    text-align: center;
    font-size: 0.75rem;
    color: black;
    margin: 0;
    padding: 8rem 2rem 1rem 2rem;
  }
`;

function Footer(): JSX.Element {
  return (
    <FooterStyle>
      <p>
        OurAnimeList.net is a property of OurAnimeList, LLC. ©2020 All Rights
        Reserved.
      </p>
    </FooterStyle>
  );
}

export default Footer;
