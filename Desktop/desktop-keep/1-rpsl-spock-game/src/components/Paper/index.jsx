import React from 'react';
import { ContainerPaper } from './style.js';
import iconPaper from '../../images/icon-paper.svg';

const Paper = () => {
  return (
    <ContainerPaper>
      <img
        name='paper'
        src={ iconPaper }
        alt='icon paper'
      />
    </ContainerPaper>
  );
}

export default Paper; 