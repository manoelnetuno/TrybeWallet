import { ExpenseType } from './ExpenseType';

export type WalletAction =
  | { type: 'UPDATE_CURRENCY', payload: string[] }
  | { type: 'UPDATE_EXPENSES', payload: ExpenseType }
  | { type: 'DELETE_EXPENSE', payload: number };
