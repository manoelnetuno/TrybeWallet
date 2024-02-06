import { useSelector } from 'react-redux';
import { GlobalState } from '../redux';

function Header() {
  const DataUser = useSelector((state: GlobalState) => state.user.email);
  return (
    <section>
      <p data-testid="email-field">{DataUser}</p>
      <span data-testid="total-field">0</span>
      <span data-testid="header-currency-field">BRL</span>
    </section>

  );
}

export default Header;
