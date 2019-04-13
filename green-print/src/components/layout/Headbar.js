import React from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  margin-bottom: 15px;
  height: 53px;
  background-color: #009688;
  a {
    margin-right: 3%;
    margin-left: 5.8%;
    text-decoration: none;
  }
  .logo {
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .links {
    color: white;
    font-size: 1.04rem;
    font-weight: bold;
    margin-left: 2.5%;
  }
  .link-container {
    display: flex;
    flex-direction: row-reverse;
    width: 30%;
    flex-grow: 1;
    margin-right: 0;
  }
`;

const Headbar = () => {
  return (
    <StyledDiv>
      <Link to="/" className="logo">
        Green-Print
      </Link>

      <div className="link-container">
        <Link to="/" className="links">
          Log In
        </Link>
        <Link to="/" className="links">
          Log Out
        </Link>
        <Link to="/appHome" className="links">
          Calculate
        </Link>
        <Link to="/about" className="links">
          About
        </Link>
      </div>
    </StyledDiv>
  );
};

export default Headbar;
