import React, { Component } from 'react';

class ScoreBoard extends Component {

    render() {
        return (
            <div className="score-board text-center">
                <div className="row">
                    <div className="col">
                        <h1 className="display-4">This is where we stand</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="#" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Player</h5>
                                    <p className="display-4">3</p>
                                    <p className="card-text"><small className="text-muted">last move: Paper</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="#" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Computer</h5>
                                    <p className="display-4">1</p>
                                    <p className="card-text"><small className="text-muted">last move: Rock</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
            </div>
        )
    }
}

export default ScoreBoard;