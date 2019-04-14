import React from "react";
import styled from "styled-components";

const Styledcontainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 0px;
  margin-right: 7%;
  margin-left: 6.1%;
  div {
    font-size: 1.6rem;
    margin-bottom: 30px;
    span {
      font-weight: bold;
    }
  }
  font-size: 1.3rem;
  text-align: left;
  .no-data-div {
    text-align: center;
    margin-right: 36%;
  }
  table {
    width: 70%;
    th {
      text-align: center;
    }
    td {
      text-align: center;
    }
  }
`;
//average fuel efficiency = 18.2km/l and petrol price: 72.6rs/lt
// average price of petrol per km = 4rs

const FinancialRoad = props => {
  function carFuel() {
    if (props.distance === 0) {
      let cost = 0;
      return Math.round(cost);
    } else {
      let cost = parseFloat(props.distance) * 1.6093 * 7.5;
      console.log(cost);
      return Math.round(65 + cost);
    }
  }

  if (props.distance && props.time) {
    return (
      <Styledcontainer className="card-action">
        <div className="card-text">
          Financial Information for route between <span>{props.start}</span> and{" "}
          <span>{props.end}</span> :{" "}
        </div>
        <table className="striped highlight">
          <thead>
            <tr>
              <th>Transport</th>
              <th>Expenses</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Car</td>
              <td>{carFuel()} Rs</td>
            </tr>
            <tr>
              <td>Bus</td>
              <td>{carFuel() / 2} Rs</td>
            </tr>
          </tbody>
        </table>
      </Styledcontainer>
    );
  } else {
    return (
      <Styledcontainer>
        <div className="no-data-div">Please Select Stations</div>
      </Styledcontainer>
    );
  }
};

export default FinancialRoad;
