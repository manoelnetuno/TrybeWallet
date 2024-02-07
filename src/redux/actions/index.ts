import { ExpenseType } from '../../types/ExpenseType';
import { Logintype } from '../../types/Usertypes';
import { WalletAction } from '../../types/WalletAção';

export const LOGIN_DATA = 'LOGIN_DATA';

export const updateLogiData = (email:Logintype) => ({
  type: LOGIN_DATA,
  payload: email.email,
});
export const UPDATE_WALLET = 'UPDATE_WALLET';

export const updateWalletData = (form: any) => ({
  type: UPDATE_WALLET,
  payload: form,
});

export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

export const updateCurrency = (currencies: string[]): WalletAction => ({
  type: UPDATE_CURRENCY,
  payload: currencies,
});

export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const updateExpenses = (expense: ExpenseType) => ({
  type: UPDATE_EXPENSES,
  payload: expense,
});
