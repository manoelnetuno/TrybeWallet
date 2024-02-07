import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions';

interface TableRowProps {
  item: any;

}

function TableRow({ item }: TableRowProps) {
  const convertedValue = Number(item.exchangeRates[item.currency].ask)
  * Number(item.value);
  const dispatch = useDispatch();
  return (
    <tr key={ item.id }>
      <td>{item.description}</td>
      <td>{item.tag}</td>
      <td>{item.method}</td>
      <td>{Number(item.value).toFixed(2)}</td>
      <td>{item.exchangeRates[item.currency].name}</td>
      <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
      <td>{convertedValue.toFixed(2)}</td>
      <td>Real</td>
      <td>
        <button type="button">Editar</button>
        <button
          onClick={ () => dispatch(deleteExpense(item.id)) }
          type="button"
          data-testid="delete-btn"
        >
          Excluir
        </button>
      </td>
      <td />
    </tr>
  );
}

export default TableRow;
