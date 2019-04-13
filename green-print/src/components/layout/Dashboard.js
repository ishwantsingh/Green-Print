import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <StyledContainer>
        <h1>Welcome to the app</h1>
        <p>You are travelling via: </p>
      </StyledContainer>
    );
  }
}

export default Dashboard;
