export const showLoader = () => {
  return {
    type: 'SHOW_LOADER',
  };
};

export const getNearbyCinemasSuccess = (data: any) => {
  return {
    type: 'GET_CINEMAS_LIST_SUCCESS',
    data,
  };
};

export const getMoviesSuccess = (data: any) => {
  return {
    type: 'GET_MOVIES_LIST_SUCCESS',
    data,
  };
};
