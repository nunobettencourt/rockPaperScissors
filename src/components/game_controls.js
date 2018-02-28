import React, { Component } from 'react';

class GameControls extends Component {

    render() {
        return (
            <div className="game-controls">
                <div className="row">
                    <div className="col">
                        <p>Select your attack</p>
                        <h3>Ready?</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-around">
                        <button>Rock</button>
                        <button>Paper</button>
                        <button>Scissor</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameControls;
