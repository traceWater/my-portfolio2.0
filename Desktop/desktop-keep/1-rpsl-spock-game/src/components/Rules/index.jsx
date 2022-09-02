import React from 'react';
import {useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import iconClose from '../../images/icon-close.svg';
import imgRules from '../../images/image-rules-bonus.svg';
import { ContainerRules } from './style.js';


const ClickRules = (props) => {
  const history = useHistory();
  console.log(history);
  return (
    <ContainerRules>
      <h2>Rock Paper Sissor Lizard Spock - "Rules"</h2>
      <img src={ imgRules } alt='rules' />
      <button
        className="btn-close-rules"
        onClick={ () => (history.push(history.goBack())) }>
        <img src={ iconClose } alt='icon close' />
      </button>
    </ContainerRules>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    hiddenRules: () => dispatch({ type: 'HIDDEN_RULES' }),
  }
}

export default connect(null, mapDispatchToProps)(ClickRules);