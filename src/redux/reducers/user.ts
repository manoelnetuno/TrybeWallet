import { AnyAction } from 'redux';
import { LOGIN_DATA } from '../actions';

type UserState = {
  email: string,
};

const INITIAL_STATE = {
  email: '',
};

function userData(state = INITIAL_STATE, action: AnyAction): UserState {
  switch (action.type) {
    case LOGIN_DATA:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default userData;
