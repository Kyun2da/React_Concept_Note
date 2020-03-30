import React from "react";
import FirstHeader from "../molecules/FirstHeader";
import SecondHeader from "../molecules/SecondHeader";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <FirstHeader />
      <SecondHeader />
    </HeaderContainer>
  );
};

export default Header;
