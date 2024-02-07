import { ExpenseType } from './ExpenseType';

export type WalletType = {
  currencies: string[],
  expenses: ExpenseType[],
  editor: boolean,
  idToEdit: number,
};
