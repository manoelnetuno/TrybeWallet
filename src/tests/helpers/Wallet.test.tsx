import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import Header from '../../components/Header';
import Wallet from '../../pages/Wallet';
import WalletForm from '../../components/WalletForm';

const VAL_INPUT = 'value-input';
const DESCRIP_INPUT = 'description-input';
const ADD_ESPEN_BUT = 'add-expense-button';

describe('Testes na página do Wallet', () => {
  test('renderiza os componentes Header e WalletForm', () => {
    renderWithRouterAndRedux(<Wallet />);

    const header = screen.getByTestId('header-component');
    const walletForm = screen.getByTestId('wallet-form-component');

    expect(header).toBeInTheDocument();
    expect(walletForm).toBeInTheDocument();
  });

  test('renderiza o componente de cabeçalho com campos de email e total', () => {
    renderWithRouterAndRedux(<Header />);

    const emailField = screen.getByTestId('email-field');
    const totalField = screen.getByTestId('total-field');
    const currencyField = screen.getByTestId('header-currency-field');

    expect(emailField).toBeInTheDocument();
    expect(totalField).toBeInTheDocument();
    expect(currencyField).toBeInTheDocument();
  });

  test('renderiza formulário de carteira com campos de entrada e botão de adicionar despesa', () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valueInput = screen.getByTestId(VAL_INPUT);
    const descriptionInput = screen.getByTestId(DESCRIP_INPUT);
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');
    const addExpenseButton = screen.getByTestId(ADD_ESPEN_BUT);

    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(addExpenseButton).toBeInTheDocument();
  });

  test('habilita o botão de adicionar despesa quando todos os campos estiverem preenchidos', async () => {
    renderWithRouterAndRedux(<WalletForm />);

    const valueInput = screen.getByTestId(VAL_INPUT);
    const descriptionInput = screen.getByTestId(DESCRIP_INPUT);
    const addExpenseButton = screen.getByTestId(ADD_ESPEN_BUT);

    await userEvent.type(valueInput, '10');
    await userEvent.type(descriptionInput, 'Test expense');

    expect(addExpenseButton).toBeEnabled();
  });
  test('atualiza a soma total das despesas no header após adicionar uma despesa', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = screen.getByTestId(VAL_INPUT);
    const descriptionInput = screen.getByTestId(DESCRIP_INPUT);
    const addExpenseButton = screen.getByTestId(ADD_ESPEN_BUT);
    const totalField = screen.getByTestId('total-field');

    await userEvent.type(valueInput, '10');
    await userEvent.type(descriptionInput, 'Test expense');
    await userEvent.click(addExpenseButton);

    expect(totalField).toHaveTextContent('Total: R$10,00');
  });
});
