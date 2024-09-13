const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "960c860815757f1f3b81b6bef3dd28b8";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;

// console.log("API Key:", API_KEY);
