import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

function Wallet() {
  return (
    <div>
      <h1>TrybeWallet</h1>
      <Header />
      <WalletForm />
      <Table data-test="table-id" />
    </div>
  );
}

export default Wallet;
