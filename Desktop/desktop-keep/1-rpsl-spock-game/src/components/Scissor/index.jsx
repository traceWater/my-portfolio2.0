import React from 'react';
import { ContainerScissor } from './style.js';
import ImgScissor from '../../images/icon-scissors.svg';

const Scissor = () => {
  return(
    <ContainerScissor>
      <img 
        name="scissor"
        src={ ImgScissor }
        alt="scissor icon"
      />
    </ContainerScissor>
  );
}

export default Scissor;