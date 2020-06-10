import React from "react";
import "./styles.css";
import Cash from "./Cash";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.doo = React.createRef();
  }
  render() {
    return (
      <div
        ref={this.doo}
        style={{
          display: "flex",
          position: "fixed",
          fontFamily: "sans-serif",
          textAlign: "center",
          height: "100vh",
          width: "100%",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            padding: "0px 15px",
            display: "flex",
            position: "relative",
            backgroundColor: "rgb(140,180,150)",
            borderBottom: "1px white solid",
            height: "56px",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white"
          }}
        >
          <h1 onClick={() => this.setState({ vaumoneyOpen: true })}>
            Vaumoney
          </h1>
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "36px",
              borderRadius: "50px",
              height: "36px",
              border: "1px white solid",
              backgroundColor: "teal",
              alignItems: "center",
              justifyContent: "center",
              color: "white"
            }}
          >
            &#9678;
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            backgroundColor: "teal",
            height: "56px",
            top: "0",
            left: "0",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}
        >
          <h2>Sales tax</h2>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            backgroundColor: "teal",
            height: "calc(100% - 168px)",
            top: "0",
            left: "0",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}
        >
          <h2>Map</h2>
        </div>
        <div
          style={{
            display: "flex",
            position: "fixed",
            backgroundColor: "teal",
            width: "100%",
            height: "56px",
            bottom: "0",
            left: "0",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}
        >
          <h2>Transfer Money</h2>
        </div>
        <Cash
          vaumoneyOpen={this.state.vaumoneyOpen}
          closeVaumoney={() => this.setState({ vaumoneyOpen: false })}
        />
      </div>
    );
  }
}
