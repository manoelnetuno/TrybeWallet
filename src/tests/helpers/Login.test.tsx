import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import Login from '../../pages/Login';
import App from '../../App';

const inputTestId = 'email-input';
const passwordInputId = 'password-input';

describe('Login Page', () => {
  test('renderiza os campos de email e senha', () => {
    renderWithRouterAndRedux(<Login />, { initialEntries: ['/'] });

    const emailInput = screen.getByTestId(inputTestId);
    const passwordInput = screen.getByTestId(passwordInputId);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('Habilitar botão quando "email" e "senha" estiverem válidos', async () => {
    renderWithRouterAndRedux(<Login />, { initialEntries: ['/'] });

    const emailInput = screen.getByTestId(inputTestId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const submitButton = screen.getByTestId('login-button');

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');

    expect(submitButton).toBeEnabled();
  });

  test('Desabilitar botão quando "email" e "senha" estiverem inválidos', async () => {
    renderWithRouterAndRedux(<Login />, { initialEntries: ['/'] });

    const emailInput = screen.getByTestId(inputTestId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const submitButton = screen.getByTestId('login-button');

    await userEvent.type(emailInput, 'invalidemail');
    await userEvent.type(passwordInput, '123');

    expect(submitButton).toBeDisabled();
  });

  test('renderiza a página de login como rota padrão', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/'] });

    expect(screen.getByText(/Trybe/i)).toBeInTheDocument();
  });

  test('renders wallet page when navigating to /carteira route', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    expect(screen.getByText(/TrybeWallet/i));
  });
});
