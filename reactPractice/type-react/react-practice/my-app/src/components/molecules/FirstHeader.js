import React from "react";
import Logo from "../atoms/logo/Logo";
import styled from "styled-components";

const FirstHeaderStyle = styled.div`
  background-color: #91d5ff;
  width: 100%;
  height: 20px;
  padding: 20px;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
`;

const FirstHeader = () => {
  return (
    <FirstHeaderStyle>
      <Logo size="large">Kyun2Da Blog</Logo>
    </FirstHeaderStyle>
  );
};

export default FirstHeader;
