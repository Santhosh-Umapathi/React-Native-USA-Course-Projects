import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer aAu-UAxsqcUhKY427Ai50rl6RrBgy6xwMwyUCfFmR_6xzU7-Na4Qkfzd519kwV3lruYBPsRZT5zFCRSYjrvxKcrW4E-gV8TY3LhTvfm-PoaXdpY6UWLGyzNhBhhqXnYx",
  },
});