import styled from 'styled-components';

export const ContainerPaper = styled.div`
  background-color: rgb(255, 255, 255);
  width: 80px;
  height: 80px;
  border: solid 13px rgb(72, 109, 244);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 45%;
  }
`;