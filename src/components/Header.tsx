import { useSelector } from 'react-redux';
import { GlobalState } from '../redux';

function Header() {
  const DataUser = useSelector((state: GlobalState) => state.user.email);
  const DataExpense = useSelector((state: GlobalState) => state.wallet.expenses);
  const totalExpense = () => {
    return DataExpense.reduce((total: number, { value, exchangeRates, currency }: any) => {
      total += +value * +exchangeRates[currency].ask;
      return total;
    }, 0);
  };
  return (
    <section>
      <p data-testid="email-field">{DataUser}</p>
      <p data-testid="total-field">{totalExpense().toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </section>

  );
}

export default Header;
