import {ADAPTER_CONSTANTS, API_URL} from '@src/constants/apiConstants';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesSuccess, getNearbyCinemasSuccess} from 'src/store/actions';
import {WLResourceRequest} from 'react-native-ibm-mobilefirst';

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
        API_URL.CINEMA_SHOW_TIMES(cinema_id, '2022-11-04'),
      )) as any;
      if (response.status === 200) {
        dispatch(getMoviesSuccess(response.data.films));
      }
    } catch (err) {
      console.log('err getting show', err);
      return [];
    }
  };

  const getNearbyCinemas = async () => {
    try {
      var resourceRequest = new WLResourceRequest(
        ADAPTER_CONSTANTS.CINEMA_NEAR_BY,
        WLResourceRequest.GET,
      );
      resourceRequest.send().then(
        (response: any) => {
          if (response.status == 200) {
            dispatch(
              getNearbyCinemasSuccess(JSON.parse(response.responseText)),
            );
          }
        },
        (error: any) => {
          console.log(error);
        },
      );
    } catch (err) {
      console.log('err getting cinemas', err);
      return [];
    }
  };

  const getFilmDetails = async (film_id: string) => {
    try {
      const response = (await get(API_URL.FILM_DETAILS(film_id))) as any;
      if (response.status === 200) {
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
      if (response.status === 200) {
      }
    } catch (err) {
      console.log('err getting details', err);
      return [];
    }
  };

  return {getNearbyCinemas, getFilmDetails, movieDetails, getFilmTrailers};
};

// var input = {
//   method: "get",
//   returnedContentType: "json",
//   path: "https://api-gate2.movieglu.com/cinemasNearby/?n=25",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     client: "DEV_0",
//     "x-api-key": "4qEvoBuESv456NPNMIU9d2bsRB45uAGQL668wLo5",
//     authorization: "Basic REVWXzBfWFg6Z0tTaGVUZjJqR1N0",
//     territory: "XX",
//     "api-version": "v200",
//     geolocation: "-22.0;14.0",
//     "device-datetime": "2022-11-04T08:30:17.360Z",
//   },
// };
