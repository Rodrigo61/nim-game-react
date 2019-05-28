import React from "react";
import stoneImg from "../static/favicon.ico";
import "./Stone.css";

class Stone extends React.Component {
  state = {
    selected: false
  };

  componentDidMount() {
    console.log("Stone Mounted!");
  }

  render() {
    console.log("this.state.selected = " + this.props.isSelected);
    const imgClass = this.props.isSelected ? "selectedImg" : "notSelectedImg";
    return (
      <img
        src={stoneImg}
        className={imgClass}
        alt=""
        onClick={this.props.onClick}
        key={this.props.key}
      />
    );
  }
}

export default Stone;
