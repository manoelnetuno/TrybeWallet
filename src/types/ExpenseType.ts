import { Currency } from './currencytype';

export type ExpenseType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates?: Currency
};
