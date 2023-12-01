import React from "react";
import { defaultTheme } from "../defaultTheme";
import styled from "styled-components";
import Vector from "../../assets/Vector.png";
import Xmark from "../../assets/xmark-solid .svg";
import Logo from "../../assets/GYM24 - logo.png";
const Header = () => {
  return (
    <HeaderContainer>
      <LogoDiv>
        <img src={Logo}></img>
      </LogoDiv>
      <MenuDiv>
        <Ul>
          <Li>
            <a>Advantages</a>
          </Li>
          <Li>
            <a>Membership</a>
          </Li>
          <Li>
            <a>About</a>
          </Li>
          <Li>
            <a>Trainers</a>
          </Li>
        </Ul>
        <IconsDiv>
          <a>
            <img src={Vector}></img>
          </a>
          <a>
            <img src={Xmark}></img>
          </a>
        </IconsDiv>
        <ModalDiv>
          <div>
            <a>
              <img src={Vector}></img>
            </a>
            <a>
              <img src={Xmark}></img>
            </a>
          </div>
          <div>
            <ModalUl>
              <li>
                <a>Advantages</a>
              </li>
              <li>
                <a>Membership</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Trainers</a>
              </li>
            </ModalUl>
          </div>
        </ModalDiv>
      </MenuDiv>
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
const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalUl = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`;
const ModalDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  background-color: ${defaultTheme.colors.yellow};
  padding: 20px;
`;
