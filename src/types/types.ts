export type GlobalState = {
  user: {
    email : string
  }
  wallet: {
    currencies: [],
    expenses: [],
    editor: boolean,
    idToEdit: number,
  }
};
export type Logintype = {
  email:string
};
export type WalletType = {
  currencies: [],
  expenses: [],
  editor: boolean,
  idToEdit: number,
};
