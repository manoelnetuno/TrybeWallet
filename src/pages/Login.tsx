import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateLogiData } from '../redux/actions';

function Login() {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  const emailvalidate = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/;
  const passwordminimum = () => password.length < 6;
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={ (event) => {
          event.preventDefault();
          if (emailvalidate.test(login) && !passwordminimum()) {
            dispatch(updateLogiData({ email: login }));
            navigate('/carteira');
          }
        } }
      >
        <label htmlFor="email">Email:</label>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Seu email"
          onChange={ (event) => setlogin(event.target.value) }
          value={ login }
          required
        />
        <input
          data-testid="password-input"
          type="password"
          onChange={ (event) => setpassword(event.target.value) }
          value={ password }
          required
        />
        <button
          type="submit"
          disabled={ passwordminimum() || !emailvalidate.test(login) }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
