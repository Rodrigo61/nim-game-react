import React from "react";
import ReactDOM from "react-dom";

import Board from "./components/Board";

class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>Jogo de NIM</h1>
        <Board stacks={this.props.stacks} />
      </div>
    );
  }
}

// ========================================

const stacks = [3, 5, 6, 1, 2];
ReactDOM.render(<Game stacks={stacks} />, document.getElementById("root"));
