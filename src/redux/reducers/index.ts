import { combineReducers } from 'redux';
import userData from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducers = combineReducers({
  user: userData,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
