export const BASE_URL = 'https://api-gate2.movieglu.com';

const API_URL = {
  CINEMA_NEAR_BY: `${BASE_URL}/cinemasNearby/?n=25`,
  CINEMA_SHOW_TIMES: (cinema_id: string, date: string) =>
    `${BASE_URL}/cinemaShowTimes/?cinema_id=${cinema_id}&date=${date}`,
  FILM_DETAILS: (film_id: string) =>
    `${BASE_URL}/filmDetails/?film_id=${film_id}`,
  GET_TRAILERS: (film_id: string) => `${BASE_URL}/trailers/?film_id=${film_id}`,
};

export default API_URL;
