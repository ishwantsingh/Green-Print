import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import nature from "../../images/nature.svg";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .containerAll {
    margin: 0 2%;
    text-align: center;
    .heading {
      font-size: 1.7rem;
    }
    .sub-heading {
      font-size: 1.2rem;
    }
    .transport-method {
      font-size: 1.4rem;
      font-weight: bold;
      margin: 20px auto;
      text-align: center;
    }
    .button {
      text-decoration: none;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #009688;
      border-radius: 3px;
      color: #009688;
    }
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
`;

function Dashboard(props) {
  if (!props.auth.uid) return <Redirect to="/login" />;

  return (
    <StyledContainer>
      <div className="containerAll">
        <h1>Welcome to the app</h1>
        <div>
          <Image src={nature} alt="nature" />
        </div>
        <br />
        <br />
        <div className="transport-method ">
          <Link className="button" to="/apphome">
            {" "}
            Know your Carbon footprint
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Dashboard;
