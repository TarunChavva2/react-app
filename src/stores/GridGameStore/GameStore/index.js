import { observable, action, toJS } from "mobx";

import jsonGameData from "../GameLevelsData.json";

import Cell from "../../models/Cell";

class GameStore {
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    constructor(props) {
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.setGridCells();
    }

    @action.bound
    onCellClick() {

    }

    @action.bound
    setGridCells() {
        const { gridSize } = jsonGameData[this.level];
        let idList = [...Array(gridSize * gridSize).keys()];
        let randomList = [].concat(idList).sort(() => Math.random() - 0.5).slice(0, gridSize);
        this.currentLevelGridCells = idList.map((idOfCell) => {
            const cellData = {
                id: Math.random().toString(),
                isHidden: randomList.includes(idOfCell),
            }
            return new Cell(cellData);
        })
    }

    @action.bound
    goToNextLevelAndUpdateCells() {

    }
    @action.bound
    goToInitialLevelAndUpdateCells() {

    }
    @action.bound
    resetSelectedCellsCount() {

    }
    @action.bound
    incrementSelectedCellsCount() {

    }
    @action.bound
    onPlayAgainClick() {

    }
    @action.bound
    resetGame() {

    }
    @action.bound
    setTopLevel() {

    }
}

const gameStore = new GameStore;
export default gameStore;