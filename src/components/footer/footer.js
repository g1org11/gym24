import React from "react";
import { faInstagram, faTwitter, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { defaultTheme } from "../defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Logo from "../../assets/GYM24 - logo.png";
import phone from "../../assets/icon_call.svg";
import email from "../../assets/icon_email.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LeftPart>
          <a href="/">
            <img src={Logo} alt="logo"></img>
          </a>

          <p>
            Build strength and confidence at our gym with state-of-the-art equipment, personalized
            training, and a motivating community
          </p>
        </LeftPart>
        <MiddlePart>
          <h4>Address</h4>
          <p>Republic of Belarus Minsk city Dzerzhinsky Avenue 15</p>
        </MiddlePart>
        <RightPart>
          <h4>Contact</h4>
          <Infos>
            <Info>
              <Imgs>
                <img src={phone} alt="img"></img>
                <img src={email} alt="img"></img>
              </Imgs>
              <Texts>
                <p>+375(44)-777-24-12</p>
                <p>gym24@gmail.com</p>
              </Texts>
            </Info>

            <Icons>
              <Cyrcle>
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </Cyrcle>
              <Cyrcle>
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </Cyrcle>
              <Cyrcle>
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </Cyrcle>
              <Cyrcle>
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </Cyrcle>
            </Icons>
          </Infos>
        </RightPart>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 230px;
`;
const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
  }
`;
const LeftPart = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 744px) {
    display: none;
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    width: 275px;
    height: 68px;
    flex-shrink: 0;
    margin-top: 26px;
  }
`;
const MiddlePart = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    width: 174px;
    height: 50px;
    flex-shrink: 0;
    margin-top: 26px;
  }
`;
const RightPart = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 47px;
  }
  h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 26px;
  }
`;
const Infos = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media (max-width: 393px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Imgs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 12px;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
  }
`;
const Cyrcle = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;

  border: 1px solid ${defaultTheme.colors.white};
  padding: 10px;
  border-radius: 50%;
  margin-top: 20px;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out;

  .social-icon {
    color: ${defaultTheme.colors.white};
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    border-color: ${defaultTheme.colors.yellow};
    .social-icon {
      color: ${defaultTheme.colors.yellow};
    }
  }
  @media (max-width: 393px) {
    margin-top: 31px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  ${Cyrcle}:hover {
    border: 1px solid ${defaultTheme.colors.yellow}; // You may adjust the border color accordingly
  }
  @media (max-width: 393px) {
    gap: 24px;
  }
`;
const IconImg = styled.img`
  width: 20px;
  height: 20px;

  &:hover {
    color: ${defaultTheme.colors.yellow}; // Change to your desired hover color
    fill: ${defaultTheme.colors.yellow};
    stroke: ${defaultTheme.colors.yellow};
  }
`;
