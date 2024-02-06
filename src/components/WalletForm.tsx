import { useState } from 'react';

function WalletForm() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('BRL');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add expense logic here
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="number"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        placeholder="Value"
      />
      <input
        type="text"
        value={ description }
        onChange={ (e) => setDescription(e.target.value) }
        placeholder="Description"
      />
      <select value={ currency } onChange={ (e) => setCurrency(e.target.value) }>
        <option value="BRL">BRL</option>
        {/* Add other currency options here */}
      </select>
      <input
        type="text"
        value={ paymentMethod }
        onChange={ (e) => setPaymentMethod(e.target.value) }
        placeholder="Payment method"
      />
      <select value={ category } onChange={ (e) => setCategory(e.target.value) }>
        <option value="food">Food</option>
        {/* Add other category options here */}
      </select>
      <button type="submit">Add expense</button>
    </form>
  );
}

export default WalletForm;
