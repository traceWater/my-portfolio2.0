import React from 'react';
import { ContainerSpock } from './style.js';
import imgLizard from '../../images/icon-lizard.svg';

const Spock = () => {
  return (<ContainerSpock>
    <img
      name='lizard'
      src={ imgLizard }
      alt='icon spock'
    />
  </ContainerSpock>);
}

export default Spock;