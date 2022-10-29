const initialState: IMovies = {
  movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0],
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
