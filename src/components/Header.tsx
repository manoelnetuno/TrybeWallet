import { useSelector } from 'react-redux';
import { GlobalState } from '../redux';

function Header() {
  const DataUser = useSelector((state: GlobalState) => state.user.email);
  return (
    <section>
      <p data-testid="email-field">{DataUser}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </section>

  );
}

export default Header;
