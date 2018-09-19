import React, { Component } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./App.css";

class App extends Component {
  state = {
    weather: null,
    scale: "℉",
    show: "SHOW CELSIUS"
  };

  getWeather = () => {
    axios
      .get(
        `http://api.aerisapi.com/forecasts/11101?client_id=KllpV2qiUwZusdF9pgkqj&client_secret=URxL6qrh2AfSR90OjjVgR7ymdTf1PWEDxUYuFlgK`
      )
      .then(data => {
        this.setState({
          weather: data.data.response[0]
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleOnClick = e => {
    console.log(e.target.onclick);
    let newScale;
    if (e.target.onclick) {
      newScale = "℃";
    } else {
      newScale = "℉";
    }
    this.setState({
      scale: newScale,
      show: "SHOW FARENHEIT"
    });
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { scale, weather } = this.state;
    if (weather) {
      return (
        <div className="App">
          <div className="Days">
            <Forecast days={weather.periods} scale={scale} />
          </div>
          {console.log("this is the scale", this.state.scale)}
          <div>
            <button
              class="button"
              onClick={this.handleOnClick}
              value={true} checked={scale === '℃'}
            >
              {" "}
              {this.state.show}{" "}
            </button>
          </div>
        </div>
      );
    } else {
      return <div className="appHeader"> loading ... </div>;
    }
  }
}

export default App;
