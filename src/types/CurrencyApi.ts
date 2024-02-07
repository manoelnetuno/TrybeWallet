const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchFullApiResponse = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const fetchCurrencyList = async () => {
  const fullResponse = await fetchFullApiResponse();
  const currencyOptions = Object.keys(fullResponse)
    .filter((value) => value !== 'USDT');
  return currencyOptions;
};

const getApi = async (type?: string) => {
  if (type === 'currency') {
    return fetchCurrencyList();
  }
  return fetchFullApiResponse();
};

export default getApi;
