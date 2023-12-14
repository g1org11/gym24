import React from "react";
import styled from "styled-components";

import { faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { defaultTheme } from "../defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Trainer = ({ img, title }) => {
  return (
    <TrainersDiv>
      <div>
        <img src={img} alt="Trainer 1" />
      </div>
      <h3>{title}</h3>
      <Icons>
        <Cyrcle>
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </Cyrcle>
        <Cyrcle>
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </Cyrcle>
        <Cyrcle>
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </Cyrcle>
      </Icons>
    </TrainersDiv>
  );
};

export default Trainer;
const TrainersDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${defaultTheme.colors.brown};
  padding: 22px 18px 29px 18px;
  border-radius: 20px;
  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin: 18px 0;
  }
`;
const Cyrcle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors.brown};
  border: 1px solid ${defaultTheme.colors.white};
  padding: 10px;
  border-radius: 50%;
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
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  ${Cyrcle}:hover {
    border: 1px solid ${defaultTheme.colors.yellow}; // You may adjust the border color accordingly
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
