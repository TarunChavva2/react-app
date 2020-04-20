import React from "react";
import { observer } from "mobx-react";
import { observable, toJS } from "mobx";

// import gameStore from "../../../stores/GridGameStore/GameStore";

import { CellDiv } from './CellStyle';

@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCell = true;
    @observable isClickedOnCell = false;

    componentDidMount() {
        setTimeout(() => this.shouldShowHiddenCell = false, (this.props.level + 3) * 1000);
    }
    onCellClick = () => {

    }
    displayCells = () => {
        if (this.props.eachCell.isHidden) {
            console.log("display cells", toJS(this.props.eachCell));
            return "green";
        }
        else {
            return "grey";
        }
    }
    render() {
        return (
            <CellDiv color={this.displayCells()} />
        )
    }
}

export default Cell;