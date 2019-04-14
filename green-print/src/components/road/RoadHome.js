import React from "react";
import styled from "styled-components";

import FinancialRoad from "./information/FinancialRoad";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  .info {
    display: flex;
    flex-direction: column;
  }
  .container {
    height: 85vh;
    width: 40vw;
    margin: 0 2%;
  }
  .heading {
    font-size: 1.3rem;
    font-weight: bold;
  }
  span {
    font-size: 1rem;
  }
`;

class RoadHome extends React.Component {
  state = {
    start: "",
    end: "",
    distance: null,
    time: null
  };
  mapboxgl = window.mapboxgl;
  MapboxDirections = window.MapboxDirections;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });

    //   console.log(this.state);
  };

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

    // INPUT REFRENCES
    const startInput = document.querySelector(".mapboxgl-ctrl-geocoder")
      .childNodes[1];
    startInput.id = "start";
    startInput.addEventListener("change", e => {
      this.handleChange(e);
    });

    const endInput = document.querySelectorAll(".mapboxgl-ctrl-geocoder")[1]
      .childNodes[1];
    endInput.id = "end";
    endInput.addEventListener("change", e => {
      this.handleChange(e);
    });
    // SOMETHING ELSE
    var that = this; //SO THAT I CAN ACCESS THIS>SETSTATE IN FUNCTION
    var checkExist = setInterval(function() {
      if (document.querySelector(".mapbox-directions-route-summary") != null) {
        const distance = document.querySelector(
          ".mapbox-directions-route-summary"
        ).childNodes[1].innerHTML;
        const time = document.querySelector(".mapbox-directions-route-summary")
          .childNodes[3].innerHTML;

        clearInterval(checkExist);
        that.setState({ distance: distance, time: time });
      }
    }, 200);
  }

  render() {
    if (this.state.start && this.state.end) {
      return (
        <StyledContainer>
          <div className="container" id="mb" />
          <div className="info">
            <div className="heading">
              Start Station:{" "}
              <span>
                {this.state.start.substring(0, this.state.start.indexOf(","))}
              </span>
            </div>
            <div className="heading">
              End Station:{" "}
              <span>
                {this.state.end.substring(0, this.state.end.indexOf(","))}
              </span>
            </div>
            <div>
              <FinancialRoad
                start={this.state.start}
                end={this.state.end}
                distance={this.state.distance}
                time={this.state.time}
              />
            </div>
          </div>
        </StyledContainer>
      );
    }
    return (
      <StyledContainer>
        <div className="container" id="mb" />
        <h1>Select Starting and Ending Point</h1>
      </StyledContainer>
    );
  }
}

export default RoadHome;
