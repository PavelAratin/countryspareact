
const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';
export const serachByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => 'https://restcountries.com/v3.1/alpha?codes=' + codes.join(',');