import styled from 'styled-components';

export const Container = styled.header`
  margin: 30px 7% 0;
  color: rgb(255, 255, 255);
  border: solid 3px rgb(235, 235, 235, .5);
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 720;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 18px;

  ul {
    margin: 20px 0 20px 20px;
  }

  @media (min-width: 800px) {
    width: 50%;
    margin: 0 auto;
    margin-top: 35px;
  }
`;

export const Score = styled.div`
  margin-right: 15px;
  background-color: rgb(255, 255, 255);
  width: 105px;
  height: 90px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p.text-score {
    color: #82b8dc;
    position: relative;
    top: -15px;
    font-size: 13px;
  }

  p.number-score {
    color: #22262e;
    font-size: 50px;
    letter-spacing: -0px;
  }
`;