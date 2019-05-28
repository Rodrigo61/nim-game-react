import React from "react";
import Stone from "./Stone";
import "./StoneStack.css";

class StoneStack extends React.Component {
  handleOnClick(stoneIdx) {
    console.log("stoneIdx = " + stoneIdx);
    console.log("this.props.stackKey = " + this.props.stackKey);
    this.props.onClick(this.props.stackKey, stoneIdx); //notify parent
  }

  componentDidMount() {
    console.log("Stack mounted!");
  }

  getRenderedStoneComponentList() {
    const stoneComponentList = [];
    for (let i = 0; i < this.props.stonesCount; i++) {
      let isSelected = false;
      if (i <= this.props.selectedPrefix) {
        isSelected = true;
      }
      stoneComponentList.push(
        <Stone
          isSelected={isSelected}
          key={i}
          onClick={() => this.handleOnClick(i)}
        />
      );
    }

    return stoneComponentList;
  }

  render() {
    return <ul>{this.getRenderedStoneComponentList()}</ul>;
  }
}

export default StoneStack;
