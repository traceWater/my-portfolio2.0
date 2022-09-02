import styled from 'styled-components';

export const ContainerScissor = styled.div`
  background-color: rgb(255, 255, 255);
  width: 80px;
  height: 80px;
  display: flex;
  border: solid 13px rgb(235, 168, 33);
  border-radius: 70px;
  justify-content: center;
  align-items: center;

  & img{
    width: 45%;
  }
`;