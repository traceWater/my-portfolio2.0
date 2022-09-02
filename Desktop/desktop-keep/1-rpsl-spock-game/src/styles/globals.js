import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600&display=swap');
* {
  margin: 0;
  padding: 0;
}

body { 
  background-color: rgb(15, 2, 40);
}

ul {
  list-style: none;
}


.background-color {
  background-color: rgb(15, 2, 40));
}

.user-vs-computer {
  margin-top: 130px;
  display: flex;
}

.user-vs-computer p {
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  font-weight: 700;
}

.bg-the-house-picked {
  background-color: rgb(25, 40, 69);
  width: 106px;
  height: 106px;
  border-radius: 60px;
  position: relative;
  left: 40px;
}

.choice-computer {
  z-index: 10;
  position: relative;
  right: -35px;
}

.match {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.effect {
  position: absolute;
  top: 213px;
  left: -20px;
  z-index: -1;
  width: 210px;
  height: 210px;
  border: solid 26px rgb(255, 255, 255, .04);
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.effect > div {
  width: 158px;
  height: 158px;
  border: solid 26px rgb(255, 255, 255, .06);
  border-radius: 200px;
}

.effect > div > div{
  width: 106px;
  height: 106px;
  border: solid 26px rgb(255, 255, 255, .1);
  border-radius: 100px;
}

.you-picked-effect {
  position: relative;
  top: 127px;
  left: -15px;
}

.you-picked {
  position: relative;
  top: 20px;
}

.the-house-picked {
  position: relative;
  top: 20px;
  left: 20px;
}

.play-again {
  margin-top: 30px;
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  p {
    color: rgb(255, 115, 200);
    font-size: 40px;
    font-weight: 900;
  }
  a {
    text-decoration: none;
    color: rgb(222, 8, 622);
    margin-top: 15px;
    border-radius: 10px;
    padding: 17px 70px;
    background-color: rgb(255, 255, 255);
  }
}

.rules-match {
  margin-top: 180px
}

.btn-close-rules {
  background-color: rgb(255, 255, 255);
  border: none;
}

.link-rules {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 800px) {

  .effect {
  position: absolute;
  top: 225px;
  left: 33%;
  z-index: 10;
  width: 210px;
  height: 210px;
  border: solid 26px rgb(255, 255, 255, .04);
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
}
`;

export default GlobalStyle;