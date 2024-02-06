import { useSelector } from 'react-redux';
import { GlobalState } from '../types/types';

function Header() {
  const DataUser = useSelector((state: GlobalState) => state.user.email);
  return (
    <div>
      <p data-testid="email-field">{DataUser}</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>

  );
}

export default Header;
