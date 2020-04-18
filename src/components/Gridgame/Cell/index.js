import React from "react";
import { observer } from "mobx-react";
import { observable, reaction, set } from "mobx";

import gameStore from "../../../stores/GridGameStore/GameStore";

import { CellDiv } from './CellStyle';

@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells = true;
    @observable isClickedOnCell = false;



    componentDidMount() {

    }
    onCellClick = () => {

    }
    render() {
        return (
            <CellDiv />
        )
    }
}

export default Cell;