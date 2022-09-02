import React from 'react';
import { ContainerSpock } from './style.js';
import imgSpock from '../../images/icon-spock.svg';

const Spock = () => {
  return (<ContainerSpock>
    <img
      name='spock'
      src={ imgSpock }
      alt='icon spock'
    />
  </ContainerSpock>);
}

export default Spock;