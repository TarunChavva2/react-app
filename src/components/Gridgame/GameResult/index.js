import React from "react";
import { observer } from "mobx-react";

@observer
class GameResult extends React.Component {
    onPlayAgainClick = () => {

    }
    render() {
        return (
            <div>
                <h2>Congratulations! You have won the game......</h2>
            </div>
        )
    }
}

export default GameResult;