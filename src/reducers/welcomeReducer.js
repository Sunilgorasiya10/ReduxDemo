import { WELCOME_ACTION_PRESSED } from '../actions/types';

const initialState = {
  welcomeText: 'Welcome...!',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WELCOME_ACTION_PRESSED:
      return {...state, welcomeText: action.payload}
    default:
      return state;
  }
}
