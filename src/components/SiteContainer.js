import React from "react";
import Header from "./header/Header";
import styled from "styled-components";

const SiteContainer = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default SiteContainer;
const Container = styled.div`
  padding: 40px 120px 80px 200px;
  @media (max-width: 1000px) {
    padding: 40px 30px 80px 30px;
  }
`;