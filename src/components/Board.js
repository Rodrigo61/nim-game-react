import React from "react";
import StoneStack from "./StoneStack";
import "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);

    const selectedPrefixList = [];
    for (let i = 0; i < this.props.stacks.length; i++) {
      selectedPrefixList.push(-1);
    }
    selectedPrefixList[0] = 0; // Start with the first stone from first stack selected

    this.state = {
      selectedPrefixList: selectedPrefixList
    };
  }

  render() {
    const StoneStacksComponentList = this.getStoneStacksComponentList();
    return <div className="boardDiv">{StoneStacksComponentList}</div>;
  }

  handleOnClick(key, selectedPrefix) {
    const selectedPrefixList = this.state.selectedPrefixList.slice();
    for (let i = 0; i < selectedPrefixList.length; i++) {
      selectedPrefixList[i] = -1;
    }
    selectedPrefixList[key] = selectedPrefix;
    this.setState({ selectedPrefixList: selectedPrefixList });
  }

  getStoneStacksComponentList() {
    return this.props.stacks.map((stack, index) => {
      return (
        <StoneStack
          stackKey={index}
          stonesCount={stack}
          selectedPrefix={this.state.selectedPrefixList[index]}
          onClick={(key, selectedPrefix) =>
            this.handleOnClick(key, selectedPrefix)
          }
        />
      );
    });
  }
}

export default Board;
