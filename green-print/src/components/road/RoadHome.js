import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .container {
    margin: 0 2%;
    .heading {
      font-size: 1.7rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;

class RoadHome extends React.Component {
  // mapboxgl = window.mapboxgl;

  render() {
    // this.mapboxgl.accessToken =
    //   "pk.eyJ1IjoiaXNod2FudHNpbmdoIiwiYSI6ImNqdWUzZ2NjbjBndjA0ZW9od2t1aGpvNDIifQ.w1yxRYhbHY2Xw9aQ11R7zA";

    // let map = new this.mapboxgl.Map({
    //   container: "map",
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [77.041, 28.5917], // starting position
    //   zoom: 16 // starting zoom
    // });
    // map.addControl(
    //   new MapboxDirections({
    //     accessToken: this.mapboxgl.accessToken
    //   }),
    //   "top-left"
    // );
    // map.addControl(new this.mapboxgl.NavigationControl());
    return (
      <StyledContainer>
        <div className="container">
          <input placeholder="Enter Start Point" />
          <input placeholder="Enter End Point" />
          {/* <div id="" map /> */}
        </div>
      </StyledContainer>
    );
  }
}

export default RoadHome;