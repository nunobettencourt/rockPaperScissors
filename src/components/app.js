import React, { Component } from 'react';

import GameControls from './game_controls';
import ScoreBoard from './score_board';

export default class App extends Component {
    render() {
        return (
            <div className="app container jumbotron text-center">
                <ScoreBoard/>
                <GameControls/>
            </div>
        );
    }
}
