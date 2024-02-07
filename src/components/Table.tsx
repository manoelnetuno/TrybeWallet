import { useSelector } from 'react-redux';
import { GlobalState } from '../redux';
import TableRow from './tablerow';

function Table() {
  const expenses = useSelector((state: GlobalState) => state.wallet.expenses);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item: any) => (
            <TableRow
              key={ item.id }
              item={ item }
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
