import React from 'react';
import Header from '../header/header.js';
class Emojigame extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        gameState: "PLAYING",
        listOfEmojis: [
            { id: 1, name: "Exploding Head", src: "", isClicked: false },
            { id: 2, name: "Grinning Face with Sweat", src: "", isClicked: false },
            { id: 3, name: "Smiling Face with Heart Eyes", src: "", isClicked: false },
            { id: 4, name: "Smirking Face", src: "", isClicked: false },
            { id: 5, name: "Thinking Face", src: "", isClicked: false },
            { id: 6, name: "Winking Face", src: "", isClicked: false },
            { id: 7, name: "Grinning Face", src: "", isClicked: false },
            { id: 8, name: "Crying Face", src: "", isClicked: false },
            { id: 9, name: "Astonished Face", src: "", isClicked: false },
            { id: 10, name: "Face with tears of Joy", src: "", isClicked: false },
            { id: 11, name: "Star Stuck", src: "", isClicked: false },
            { id: 12, name: "Winking Face With Tongue", src: "", isClicked: false },
        ],
    }
    componentDidMount() {
        const { listOfEmojis } = this.state;
        const emoji = listOfEmojis.map(emojiimage => {
            emojiimage.src = `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${emojiimage.id}.png`
        })
    }
    onEmojiClick = () => { }
    shuffleEmojis = () => { }
    incrementScore = () => { }
    onPlayAgainClick = () => { }
    resetGame = () => { }
    setTopScore = () => { }
    onChangeTheme = () => { }
    render() {
        return (
            <Header />

        )
    }
}
export default Emojigame;