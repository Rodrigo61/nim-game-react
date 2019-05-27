import React from "react";
import Stone from "./Stone";
import "./StoneStack.css";

class StoneStack extends React.Component {
  render() {
    const stonesCount = this.props.stonesCount;
    const stoneComponentList = [];
    for (let i = 0; i < stonesCount; i++) {
      const stoneComponent = new Stone().render();
      stoneComponentList.push(stoneComponent);
    }
    return <ul>{stoneComponentList}</ul>;
  }
}

export default StoneStack;
