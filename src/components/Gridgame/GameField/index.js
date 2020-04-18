import React from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import { GameFieldDiv } from "./Gamefieldstyle";

import Cell from '../Cell';
import gameStore from "../../../stores/GridGameStore/GameStore";

@observer
class GameField extends React.Component {

    renderCellsList = () => {
        return gameStore.currentLevelGridCells.map((eachCell) => {
            return <Cell eachCell={eachCell} key={eachCell.id} />
        })
    }

    render() {
        console.log(toJS(gameStore.currentLevelGridCells))
        return (
            <GameFieldDiv>
                {this.renderCellsList()}
            </GameFieldDiv>
        )
    }
}

export default GameField;