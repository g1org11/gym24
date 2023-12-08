import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Hero from "./hero/Hero";
import Reasons from "./reasons/Reasons";
import Membership from "./membership/Membership";

const SiteContainer = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Reasons />
      <Membership />
    </Container>
  );
};

export default SiteContainer;
const Container = styled.div`
  padding: 40px 120px 80px 200px;
  @media (max-width: 1000px) {
    padding: 40px 30px 80px 30px;
  }
  @media (max-width: 744px) {
    padding: 40px 19px 84px 19px;
  }
  @media (max-width: 393px) {
    padding: 60px 30px 70px 30px;
  }
`;
