// Remova os comentários a medida que for implementando as funções

export const searchCities = (term) => {
//   seu código aqui import.meta.env.VITE_TOKEN
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${import.meta.env.VITE_TOKEN}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0 || data.error) {
        return window.alert('Nenhuma cidade encontrada', data);
      }
      return data;
    });
};

export const getWeatherByCity = (cityURL) => {
//   seu código aqui
  return fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${import.meta.env.VITE_TOKEN}&q=${cityURL}`)
    .then((response) => response.json())
    .then((data) => data);
};
