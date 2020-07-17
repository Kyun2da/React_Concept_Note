import React from "react";
import styled, { css } from "styled-components";

const sizeStyles = css`
  ${props =>
    props.size === "large" &&
    css`
      font-size: 25px;
    `}

  ${props =>
    props.size === "medium" &&
    css`
      font-size: 1rem;
    `}

    ${props =>
      props.size === "small" &&
      css`
        font-size: 0.875rem;
      `}
`;

const LogoStyle = styled.div`
  display: inline-block;

  /* 크기 */
  ${sizeStyles}
`;

const Logo = ({ children, size }) => {
  return <LogoStyle size={size}>{children}</LogoStyle>;
};

export default Logo;
