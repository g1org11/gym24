import React from "react";
import lineIcon from "../../assets/icon_line.svg";
import epuipmentIcon from "../../assets/icon_ eqipment.svg";
import zonesIcon from "../../assets/icon_ fitness zones.svg";
import timeIcon from "../../assets/icon_time.svg";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";

const Reasons = () => {
  return (
    <ReasonsContainer>
      <ReasonsTitle>Reasons to join</ReasonsTitle>
      <ReasonWrapper>
        <ReasonsDiv>
          <img src={lineIcon} alt="lineIcon"></img>
          <div>
            <h3>15000 sq.m.</h3>
            <p>A spacious gym for sports – a safe distance between exercise machines</p>
          </div>
        </ReasonsDiv>
        <ReasonsDiv>
          <img src={epuipmentIcon} alt="epuipmentIcon"></img>
          <div>
            <h3>More than 200 equipment</h3>
            <p>
              No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength,
              TechnoGym.
            </p>
          </div>
        </ReasonsDiv>
        <ReasonsDiv>
          <img src={zonesIcon} alt="zonesIcon"></img>
          <div>
            <h3>4 fitness zones</h3>
            <p>
              From cardio to functional and cycle. Separate area for boxing and mixed martial arts
            </p>
          </div>
        </ReasonsDiv>
        <ReasonsDiv>
          <img src={timeIcon} alt="timeIcon"></img>
          <div>
            <h3>Round-the-clock operation</h3>
            <p>The gym is open 24 hours a day, also works on all holidays and weekends</p>
          </div>
        </ReasonsDiv>
      </ReasonWrapper>
    </ReasonsContainer>
  );
};

export default Reasons;

const ReasonsContainer = styled.div`
  position: relative;
  z-index: 20;
`;
const ReasonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 201;
  max-width: 571px;
  img {
    padding: 20px;
  }

  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.white};
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: ${defaultTheme.colors.white};
  }
`;
const ReasonsTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${defaultTheme.colors.white};
  margin-bottom: 120px;
`;
const ReasonWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  flex-wrap: wrap;
  gap: 80px 117px;
`;
