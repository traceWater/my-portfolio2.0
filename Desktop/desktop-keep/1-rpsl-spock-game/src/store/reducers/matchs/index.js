const INITIAL_STATE = {
  matchsOlded: [
    {
      user: "rock",
      computer: "scissor",
      result: "win",
    },
    {
      user: "paper",
      computer: "scissor",
      result: "lose",
    },
  ],
  current: {
    user: "",
    computer: "",
    result: "",
  } 
};

const items = [
  'scissor',
  'paper',
  'rock',
  'lizard',
  'spock'
];

const resultGame = (user, computer) => {
  let result = null;
  if (
    user === 'scissor'
    && (computer === 'paper' || computer === 'lizard')
  ) {
    result = "win";
  }
  else if (
    user === 'paper'
    && (computer === 'rock' || computer === 'spock')
  ) {
    result = "win";
  }
  else if (
    user === 'rock'
    && (computer === 'lizard' || computer === 'scissor')
  ){
    result = "win";
  }
  else if (user === 'lizard'
    && (computer === 'spock' || computer === 'paper')
  ){
    result = "win";
  }
  else if (user === 'spock'
    && (computer === 'scissor' || computer === 'rock')
  ){
    result = "win";
  }
  else {
    result = "lose";
  }

  return result;
}

const randomItem = (a) => {
  const newArray = items.filter((item) => item !== a);
  const index = Math.trunc(Math.random() * 4);
  console.log(newArray[index]);
  return newArray[index];
}

const matchsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      const computer = randomItem(action.payload);
      console.log("dentro do matchsReducer:", action.payload);
      const result = resultGame(action.payload, computer);
      return { 
        ...state,
        matchsOlded: [
          ...state.matchsOlded,
          {
            user: action.payload,
            computer,
            result,
          },
        ],
        current: {
          user: action.payload,
          computer,
          result,
        },
      }
    default:
      return state;
  }
};

export default matchsReducer;
