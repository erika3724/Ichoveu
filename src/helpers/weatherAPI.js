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

export const getWeatherByCity = async (cityURL) => {
//   seu código aqui

  return fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${import.meta.env.VITE_TOKEN}&q=${cityURL}`)
    .then((response) => response.json())
    .then((data) => {
      const a = {
        name: data.location.name,
        country: data.location.country,
        url: cityURL,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      };
      return a;
    });
};

export const moreSevenDay = async (a) => {
  return fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${import.meta.env.VITE_TOKEN}&q=${a}&days=7`)
    .then((b) => b.json()).then((c) => {
      return c.forecast.forecastday.map((e) => ({
        date: e.date,
        maxTemp: e.day.maxtemp_c,
        minTemp: e.day.mintemp_c,
        condition: e.day.condition.text,
        icon: e.day.condition.icon,
      }));
    });
};
