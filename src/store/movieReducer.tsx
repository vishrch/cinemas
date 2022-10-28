const initialState: IMovies = {
  movies: [],
};

export const MovieReducer = (
  state = initialState,
  action: {type: any; data: any},
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default MovieReducer;

export interface IMovies {
  movies: any[];
}
