import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import ScoreBoard from '../../components/ScoreBoard';

import Scissor from '../../components/Scissor';
import Paper from '../../components/Paper';
import Rock from '../../components/Rock';
import Lizard from '../../components/Lizard';
import Spock from '../../components/Spock';

// State and define
const Match = (props) => {
  const {
    score,
    current,
    winMatch,
    loseMatch } = props;
  const [visible, setVisible] = useState(false);
  const [newGame, setNewGame] = useState(null);
  useEffect(() => {

    // Set time and conditions
    setTimeout(() => {
      if (current.result ===  'win') {
        winMatch();
        setNewGame('win');
      } else {
        loseMatch();
        setNewGame('lose');
      }
      console.log(current, score);

      setVisible(true);
    }, 1400);
  }, [current]);


  const renderChoiceUser = () => {
    const { user } = current;
    let componentUser = null;
    
    // Player conditions

    if (user === 'scissor') {
      componentUser = <Scissor />;
    } else if (user === 'paper') {
      componentUser = <Paper />;
    } else if (user === 'rock') {
      componentUser = <Rock />
    } else if (user === 'lizard') {
      componentUser = <Lizard />;
    } else {
      componentUser = <Spock />
    }

    return componentUser;
  }

  const renderChoiceComputer = () => {
    const { computer } = current;

    let componentComputer = null;
    
    // Computer conditions

    if (computer === 'scissor') {
      componentComputer = <Scissor />;
    } else if (computer === 'paper') {
      componentComputer = <Paper />;
    } else if (computer === 'rock') {
      componentComputer = <Rock />
    } else if (computer === 'lizard') {
      componentComputer = <Lizard />;
    } else {
      componentComputer = <Spock />
    }

    return (componentComputer);
  }

  // Restart and try again

  const btnRestart = () => {
    const { current } = props;
    let component = null;

    // Win/lose conditions

    if (newGame === 'win'){
      component = (
        <>
          <p>YOU WIN</p>
          <Link to="/">
            PLAY AGAIN
          </Link>
        </>
      );
    } else if (newGame === 'lose') {
      component = (
        <>
          <p>YOU LOSS</p>
          <Link to="/">
            PLAY AGAIN
          </Link>
        </>
      );
    } else {
      component = false;
    }

    return component;
  }
  return (
    <>
      <ScoreBoard />
      <div className="match">
        <div className="user-vs-computer">
          <div>
            { visible && current.result === 'win'
              ? (
              <div className="effect">
                <div>
                  <div>
                    { renderChoiceUser() }
                  </div>
                </div>
              </div>)
              : (renderChoiceUser())
            }

            {/* Picks fade in out */}

            { visible && current.result === 'win'
                ? (<p className="you-picked-effect">YOU PICKED</p>)
                : (<p className="you-picked">YOU PICKED</p>)
            }
          </div>
          <div>
            { !visible
                ? (<div className="bg-the-house-picked"></div>)
                : (<div className="choice-computer">{ renderChoiceComputer() }</div>)
            }
            <p className="the-house-picked">THE HOUSE PICKED</p>
          </div>
        </div>
        <div className="play-again">
          { btnRestart() }
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return ({
    score: state.score,
    current: state.matchs.current,
    stateRules: state.stateRules,
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    winMatch: () => dispatch({ type: 'WIN_MATCH'}),
    loseMatch: () => dispatch({ type: 'LOSE_MATCH'}),
    visibleRules: () => dispatch({ type: 'VISIBLE_RULES' })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);