import React from 'react';
import { observer } from "mobx-react";
import { reaction } from "mobx";

import gameStore from "../../stores/GridGameStore/GameStore";

import GameResult from "./GameResult";
import GameField from "./GameField";
import { GridGame } from './GridGamestyle';
import Header from "./Header";

@observer
class GridMemoryGame extends React.Component {

    resettingReaction = reaction(
        () => gameStore.level,
        (level) => this.resetGameIfAnsweredTooLate()
    )

    resetGameIfAnsweredTooLate = () => {
        const { isGameCompleted, onPlayAgainClick, level } = gameStore;
        clearInterval(this.intervalId);
        if (isGameCompleted) return;
        else this.intervalId = setInterval(onPlayAgainClick, (level + 3) * 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        this.resettingReaction();
    }

    constructor(props) {
        super(props)
        this.resetGameIfAnsweredTooLate();
    }
    render() {
        return (
            <GridGame>
                <Header />
                {(gameStore.isGameCompleted) ? <GameResult /> : <GameField />}
            </GridGame>
        )
    }
}

export default GridMemoryGame;