import { combineReducers } from 'redux';
import userData from './user';
import WalletData from './wallet';

const rootReducers = combineReducers({
  user: userData,
  wallet: WalletData,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
