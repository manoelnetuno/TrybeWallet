import { WalletAction } from '../../types/WalletAção';
import { WalletType } from '../../types/WalletTypes';
import { DELETE_EXPENSE, UPDATE_CURRENCY, UPDATE_EXPENSES } from '../actions';

const INITIAL_STATE: WalletType = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function walletData(state = INITIAL_STATE, action: WalletAction): WalletType {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return {
        ...state,
        currencies: action.payload,
      };
    case UPDATE_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense): any => expense.id !== action.payload),
      };
    default:
      return state;
  }
}

export default walletData;
