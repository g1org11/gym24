import React, { useState } from "react";
import { defaultTheme } from "../defaultTheme";
import styled from "styled-components";
import Vector from "../../assets/Vector.png";
import Xmark from "../../assets/xmark-solid .svg";
import Logo from "../../assets/GYM24 - logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderContainer>
      <LogoDiv>
        <img src={Logo} alt="GYM24 Logo" />
      </LogoDiv>
      <MenuDiv>
        {/* Display the burger icon by default */}
        <BurgerButton onClick={toggleMenu} show={!showMenu}>
          <img src={Vector} alt="Burger Icon" />
        </BurgerButton>
        {/* Display the X mark icon when showMenu is true */}
        {showMenu && (
          <XMarkButton onClick={toggleMenu} show={showMenu}>
            <img src={Xmark} alt="X Mark Icon" />
          </XMarkButton>
        )}
        {/* Display the modal when showMenu is true */}
        {showMenu && (
          <ModalDiv>
            <div>
              <ModalUl>
                <ModalLi>
                  <a>Advantages</a>
                </ModalLi>
                <ModalLi>
                  <a>Membership</a>
                </ModalLi>
                <ModalLi>
                  <a>About</a>
                </ModalLi>
                <ModalLi>
                  <a>Trainers</a>
                </ModalLi>
              </ModalUl>
            </div>
          </ModalDiv>
        )}
        {/* Regular menu items */}
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
      </MenuDiv>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
  color: ${defaultTheme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const BurgerButton = styled.button`
  all: unset;
  display: none;
  img {
    height: 25px;
    width: 25px;
  }

  @media (max-width: 550px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;

const XMarkButton = styled.button`
  all: unset;
  display: none;

  img {
    height: 25px;
    width: 25px;
  }
  @media (max-width: 550px) {
    display: ${(props) => (props.show ? "inline-block" : "none")};
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 70px;
  @media (max-width: 744px) {
    gap: 30px;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

const Li = styled.li`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  /* margin-right: 70px; */
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 0%;
  background-color: ${defaultTheme.colors.yellow};
  padding: 20px;
`;

const ModalLi = styled.li`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${defaultTheme.colors.black};
  margin-bottom: 8px;
`;
