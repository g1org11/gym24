import React from "react";
import { defaultTheme } from "../defaultTheme";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer style={{ backgroundColor: "red" }}>
      <LogoDiv>
        <Link>
          GYM <Span>24</Span>
        </Link>
      </LogoDiv>
      <div>
        <Ul>
          <Li>Advantages</Li>
          <Li>Membership</Li>
          <Li>About</Li>
          <Li>Trainers</Li>
        </Ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  color: ${defaultTheme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Link = styled.a`
  color: ${defaultTheme.colors.white};
  font-family: ${defaultTheme.fonts.secondary};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Span = styled.span`
  color: ${defaultTheme.colors.yellow};
  font-family: ${defaultTheme.fonts.secondary};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const Li = styled.li`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-right: 70px;
`;
