import React from 'react';
import { ContainerSpock } from './style.js';
import imgRock from '../../images/icon-rock.svg';

const Spock = () => {
  return (<ContainerSpock>
    <img
      name='rock'
      src={ imgRock }
      alt='icon spock'
    />
  </ContainerSpock>);
}

export default Spock;