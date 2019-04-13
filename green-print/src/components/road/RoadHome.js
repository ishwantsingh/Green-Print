import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .container {
    height: 85vh;
    width: 40vw;
    margin: 0 2%;
    .heading {
      font-size: 1.7rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;

class RoadHome extends React.Component {
  state = {
    start: "",
    end: ""
  };
  mapboxgl = window.mapboxgl;
  MapboxDirections = window.MapboxDirections;

  changeHandler(e) {
    e.target.name = e.target.value;
    // console.log(e.target.value);
    console.log(e.target.name);
  }
  componentDidMount() {
    this.mapboxgl.accessToken =
      "pk.eyJ1IjoiaXNod2FudHNpbmdoIiwiYSI6ImNqdWUzZ2NjbjBndjA0ZW9od2t1aGpvNDIifQ.w1yxRYhbHY2Xw9aQ11R7zA";

    let map = new this.mapboxgl.Map({
      container: "mb",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.041, 28.5917], // starting position
      zoom: 16 // starting zoom
    });
    map.addControl(
      new this.MapboxDirections({
        accessToken: this.mapboxgl.accessToken
      }),
      "top-left"
    );
    map.addControl(new this.mapboxgl.NavigationControl());
    // apppp

    const startInput = document.querySelector(".mapboxgl-ctrl-geocoder")
      .childNodes[1];
    startInput.addEventListener("change", e => {
      this.changeHandler(e);
    });

    const endInput = document.querySelectorAll(".mapboxgl-ctrl-geocoder")[1]
      .childNodes[1];
    endInput.addEventListener("change", e => {
      this.changeHandler(e);
    });
  }

  render() {
    return (
      <StyledContainer>
        <div className="container" id="mb">
          <div className="tesst" />
        </div>
      </StyledContainer>
    );
  }
}

export default RoadHome;
