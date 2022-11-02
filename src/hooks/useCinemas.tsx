import API_URL from '@src/constants/apiConstants';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesSuccess, getNearbyCinemasSuccess} from 'src/store/actions';
import {IMovies} from 'src/store/movieReducer';
import useApi from './useApi';

export const useCinemas = () => {
  const {get} = useApi();

  const [movieDetails, setMovieDetails] = useState<any>();

  const nearbyCinemas = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.nearbyCinemas,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if ((nearbyCinemas ?? []).length > 0) {
      const closest = nearbyCinemas.reduce((acc, loc) =>
        acc.distance < loc.distance ? acc : loc,
      );
      getCinemaShowTimes(closest.cinema_id);
    }
  }, [nearbyCinemas]);

  const getCinemaShowTimes = async (cinema_id: string) => {
    try {
      const response = (await get(
        API_URL.CINEMA_SHOW_TIMES(cinema_id, '2022-11-02'),
      )) as any;
      if ((response.status = 200)) {
        dispatch(getMoviesSuccess(response.data.films));
      }
    } catch (err) {
      console.log('err getting show', err);
      return [];
    }
  };

  const getNearbyCinemas = async () => {
    try {
      const response = (await get(API_URL.CINEMA_NEAR_BY)) as any;
      if ((response.status = 200)) {
        dispatch(getNearbyCinemasSuccess(response.data));
      }
    } catch (err) {
      console.log('err getting cinemas', err);
      return [];
    }
  };

  const getFilmDetails = async (film_id: string) => {
    try {
      const response = (await get(API_URL.FILM_DETAILS(film_id))) as any;
      if ((response.status = 200)) {
        setMovieDetails(response.data);
      }
    } catch (err) {
      console.log('err getting details', err);
      return [];
    }
  };

  const getFilmTrailers = async (film_id: string) => {
    try {
      const response = (await get(API_URL.GET_TRAILERS(film_id))) as any;
      if ((response.status = 200)) {
        console.log(
          '***********************',
          response.data.trailers.high[0].film_trailer,
        );
      }
    } catch (err) {
      console.log('err getting details', err);
      return [];
    }
  };

  return {getNearbyCinemas, getFilmDetails, movieDetails, getFilmTrailers};
};
