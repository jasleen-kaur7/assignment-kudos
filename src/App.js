import React, { Component, useState } from "react";
import "../src/App.css";



class App extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  currentTime = () => {
    this.setState({ time: new Date() });  
  }
 
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime());    
  }

  render() {
    return (
      <>
      <div>
        <div className="Clock">
          <h3 id="time">{this.state.time.toLocaleTimeString()} </h3>
        </div>
      </div>
       
      </>
    );
  }
}
export default App;
