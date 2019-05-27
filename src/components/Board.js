import React from "react";
import StoneStack from "./StoneStack";
import "./Board.css";

class Board extends React.Component {
  render() {
    const StoneStacksComponentList = this.props.stacks.map(stack => {
      return <StoneStack stonesCount={stack} />;
    });

    return <div class="boardDiv">{StoneStacksComponentList}</div>;
  }
}

export default Board;
