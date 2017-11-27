import React, { Component } from 'react';
import axios from 'axios';

class Game extends Component {
    constructor(props){
        super(props);
        this.startGame = this.startGame.bind(this);
    }
    

    startGame(){
        axios.get(`http://localhost:8099/api/games/startgame/${this.props.fullGame.steamId}`)
    }
    render (){
        return(
            <div onClick= {this.startGame}>
                {this.props.fullGame.name}
                <img src = {`http://cdn.akamai.steamstatic.com/steam/apps/${this.props.fullGame.steamId}/header.jpg?t=1510847069`}/>
            </div> 
        )
    }
}

export default Game;
//Export default Game means this is a component and it will export itself, this makes it a public class