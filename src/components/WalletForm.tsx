import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getApi from '../types/CurrencyApi';
import { updateCurrency, updateExpenses } from '../redux/actions';
import { GlobalState } from '../redux';
import { ExpenseType } from '../types/ExpenseType';

function WalletForm() {
  const dispatch = useDispatch();
  const pickCurrency = useSelector((state: GlobalState) => state.wallet.currencies);
  const formInitial = { id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação' };

  const [form, setForm] = useState<ExpenseType>(formInitial);

  useEffect(() => {
    const getCurrencyOptions = async () => {
      const data = await getApi('currency');
      dispatch(updateCurrency(data));
    };
    getCurrencyOptions();
  }, [dispatch]);

  const handleSubmit = () => {
    const newId = form.id + 1;
    const updatedForm = { ...formInitial, id: newId };
    setForm(updatedForm);
  };

  return (
    <section>
      <form
        data-testid="wallet-form-component"
        onSubmit={ async (e) => {
          e.preventDefault();
          const currencies = await getApi();
          const expense = { ...form, exchangeRates: currencies };
          dispatch(updateExpenses(expense));
          handleSubmit();
        } }
      >

        <input
          type="text"
          data-testid="value-input"
          placeholder="Valor da despesa"
          value={ form.value }
          onChange={ ({ target }) => setForm({ ...form, value: target.value }) }
        />

        <input
          type="text"
          data-testid="description-input"
          placeholder="Descrição da despesa"
          value={ form.description }
          onChange={ ({ target }) => setForm({ ...form, description: target.value }) }
        />

        <label htmlFor="currency=select">Moeda</label>
        <select
          id="currency-select"
          name="currency"
          data-testid="currency-input"
          value={ form.currency }
          onChange={ ({ target }) => setForm({ ...form, currency: target.value }) }
        >
          { pickCurrency.map((currency) => (
            <option key={ currency } value={ currency }>{ currency }</option>
          )) }
        </select>

        <label htmlFor="methods">Método de pagamento</label>
        <select
          data-testid="method-input"
          id="methods"
          name="methods"
          value={ form.method }
          onChange={ ({ target }) => setForm({ ...form, method: target.value }) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <label htmlFor="tag">Despesa</label>
        <select
          data-testid="tag-input"
          id="tag"
          name="tag"
          value={ form.tag }
          onChange={ ({ target }) => setForm({ ...form, tag: target.value }) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <button
          data-testid="add-expense-button"
        >
          Adicionar despesa
        </button>

      </form>
    </section>
  );
}

export default WalletForm;
