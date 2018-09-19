import React, { Component } from "react";



class Forecast extends Component {
  render() {
    const { days, scale } = this.props;
    return (
      <div className="forcastPage">
        <div className="appHeader"> WEATHER FORECAST </div>
        <div className="forcast">
          {days.map((day, index) => {
            let maxTemp = day.maxTempF;
            let minTemp = day.minTempF;
            let date = new Date(day.dateTimeISO);
            let dayName = date.toLocaleDateString("en-US", { weekday: "long" });
            if (scale === "℃") {
              maxTemp = day.maxTempC;
              minTemp = day.minTempC;
            }
              return (
                <div>
                  <div className="dayName">{dayName}</div>
                  <div className="bottom">
                  <div classname="icon">
                    <img src={`icons/${day.icon}`} alt={day.icon} />
                  </div>
                  <div className="maxTemp">{maxTemp}°</div>
                  <div className="minTemp">{minTemp}°</div>
                  </div>
                </div>
              );
            
          })}
        </div>
      </div>
    );
  }
}

export default Forecast;
