import React from "react";
import StoneStack from "./StoneStack";
import "./Board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    const selectedPrefixList = this.props.stacks.map(() => {
      return -1;
    });

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
