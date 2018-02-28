import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class GameControls extends Component {

    renderButton(option) {
        return (
            <button
                key={option}
                type="button"
                className="btn btn-light"
            >
                <img src={`/img/${option}.png`} alt={option} />
            </button>
        )
    }

    render() {

        const { options } = this.props;

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
                        {_.map(options, option => this.renderButton(option))}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        options: state.options
    }
}

export default connect(mapStateToProps)(GameControls);
