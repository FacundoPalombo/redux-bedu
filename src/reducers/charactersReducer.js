const INITIAL_STATE = {
  characters: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'getCharacters':  return { ...state, characters: action.payload };
    default : return state; 
  }
}