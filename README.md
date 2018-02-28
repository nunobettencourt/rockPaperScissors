# Rock Paper and Scissors

### Getting Started

How to get started with this repo.

```
> git clone https://github.com/nunobettencourt/rockPaperScissors.git
> cd rockPaperScissors
> npm install
> npm start
```

### Testing

How to run application's tests

```
> npm run test
```

### Approach

I started by cloning a boilerplate that I've built and maintain and that can be found 
[here](https://github.com/nunobettencourt/simpleReactReduxStarter).

I've started by implementing some basic tests and then implementing the respective functionality.
After the structure of the main components was completed I've moved on to the game logic implementation.
Finally, connected the components to Redux and run a few basic tests.

If I had more time I would have improved the UI, mainly in the scoreboard component, once that there's repetitive code 
that I don't like. 

For example:

```
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
```

I would have definitely implemented more tests, especially  concerning the game action creator and the 
scoreboard reducer.


Thank you very much for this opportunity!!