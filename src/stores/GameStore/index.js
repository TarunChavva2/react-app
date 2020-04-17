import React from 'react';
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer class GameStote {
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellsCount;
    @observable isGameCompleted;
    constructor() {
        this.level = 0;
        this.topLevel = 7;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = true;
    }
    @action.bound
    onCellClick() {

    }
    @action.bound
    setGridCells() {

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