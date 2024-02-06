type ActionType = {
  type: string,
};

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const WalletData = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default WalletData;
