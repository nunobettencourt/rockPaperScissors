import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreBoard extends Component {

    render() {

        const { scoreboard: { Player, Computer, Draw }, game: { playerSelection, computerSelection } } = this.props;

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
                                <img className="card-img-top" src="/img/man.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Player</h5>
                                    <p className="display-4">{Player}</p>
                                    <p className="card-text">
                                        <small className="text-muted">your move: </small>
                                        <span className="lead">{playerSelection}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="/img/man.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Computer</h5>
                                    <p className="display-4">{Computer}</p>
                                    <p className="card-text">
                                        <small className="text-muted">your move: </small>
                                        <span className="lead">{computerSelection}</span>
                                    </p>
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

function mapStateToProps(state) {
    return {
        scoreboard: state.scoreboard,
        game: state.game
    }
}

export default connect(mapStateToProps)(ScoreBoard);