import React from 'react';
import { Container, Score } from './style';
import { connect } from 'react-redux';

const ScoreBoard = (props) => {
  const { score } = props;
  return (
    <Container>
      <ul>
        <li>Rock</li>
        <li>Paper</li>
        <li>Scissors</li>
        <li>Lizard</li>
        <li>Spock</li>
      </ul>
      <Score>
        <p className="text-score">Score</p>
        <p className="number-score">{ score }</p>
      </Score>
    </Container>
  );
}

const mapStateToProps = (store) => {
  return ({
    score: store.score,
  });
}
export default connect(mapStateToProps)(ScoreBoard);