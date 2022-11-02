const initialState: IMovies = {
  movies: [],
  nearbyCinemas: [],
  tickets: [],
};

export const MovieReducer = (
  state = initialState,
  action: {type: any; data: any},
) => {
  switch (action.type) {
    case 'GET_CINEMAS_LIST_SUCCESS':
      return {
        ...state,
        nearbyCinemas: action?.data.cinemas,
      };
    case 'GET_MOVIES_LIST_SUCCESS':
      return {
        ...state,
        movies: action?.data,
      };

    case 'BOOK_TICKET':
      return {
        ...state,
        tickets: [...state.tickets, action?.data],
      };
    default:
      return state;
  }
};

export default MovieReducer;

export interface IMovies {
  movies: any[];
  nearbyCinemas: any[];
  tickets: any[];
}
